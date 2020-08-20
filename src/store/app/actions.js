import * as actionTypes from './actionTypes';
import axios from 'axios'
import * as constants from '../../constants'


export const selectRecipient = (contact,userName) =>  async (dispatch) => {
    const res = await axios.get(`${constants.FB_URL}/users/${userName}/messagesList/.json`);
    if (res.data) {
        const messages = res.data[contact];
        dispatch(setContact({recipient: contact, messages}))
    }
    else {
        dispatch(setContact({ recipient: contact }))
    }
};

const filterContacts = (contact, contacts) => {
    if (!contacts.length) return null;
    const search = contact.toLowerCase().trim();
    const filtered = contacts.filter((el) => el.slice(0,search.length).toLowerCase().includes(search));
    return [...filtered];
};

export const actionSearch =  (contact) => async (dispatch) => {
    const res = await axios.get(`${constants.FB_URL}/users/.json`);
    const {data} = res;
    const contacts = Object.keys(data);
    const filteredContacts = filterContacts(contact,contacts) || null;

    dispatch(setSearchContacts(filteredContacts))
};

export const sendTyRecipientMessage = (sender,recipient, prevMessages=[], newMessage) => async (dispatch) => {
    const messages = [...prevMessages, {
        author: sender,
        text: newMessage,
        date: new Date().toLocaleString()
    }];
    await axios.put(`${constants.FB_URL}/users/${sender}/messagesList/${recipient}.json`, messages);
    await axios.put(`${constants.FB_URL}/users/${recipient}/messagesList/${sender}.json`, messages);
    dispatch(addMessage(messages))
};


export const setSearchContacts = (payload) => ({
    type: actionTypes.SET_SEARCH_CONTACTS,
    payload
});


export const addMessage = (payload) => ({
    type: actionTypes.ADD_MESSAGE,
    payload
});


export const setContact = (payload) => ({
    type: actionTypes.SET_CONTACT,
    payload
});

export const signOutApp = () => ({
    type: actionTypes.EXIT_APP,
});
