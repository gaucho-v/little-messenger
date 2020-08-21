import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as constants from '../../constants';
import * as support from './index';

export const selectRecipient = (contact, userName) =>  async dispatch => {
  const res = await axios.get(`${constants.FB_URL}/users/${userName}/messagesList/.json`);
  if (res.data) {
    const messages = res.data[contact];
    dispatch(setContact({ recipient: contact, messages }));
  }
  else {
    dispatch(setContact({ recipient: contact }));
  }
};


export const actionSearch = (contact, userContacts) => async dispatch => {
  if (!contact) {
    dispatch(setSearchContacts(null));
    return null;
  }
  else {
    const response = await axios.get(`${constants.FB_URL}/users/.json`);
    const { data } = response;
    const allContacts = Object.keys(data);
    const filteredContacts = support.filterContacts(contact, allContacts, userContacts);
    if (filteredContacts.length) {
      dispatch(setSearchContacts(filteredContacts));
    }
    else {
      dispatch(setSearchContacts(null));
    }
  }
};

export const sendTyRecipientMessage = (sender, recipient, prevMessages = [], newMessage) =>
  async dispatch => {
    const messages = [...prevMessages, {
      author: sender,
      text: newMessage,
      date: new Date().toLocaleString(),
    }];
    await axios.put(`${constants.FB_URL}/users/${sender}/messagesList/${recipient}.json`, messages);
    await axios.put(`${constants.FB_URL}/users/${recipient}/messagesList/${sender}.json`, messages);
    dispatch(addMessage(messages));
  };


export const setSearchContacts = payload => ({
  type: actionTypes.SET_SEARCH_CONTACTS,
  payload,
});


export const addMessage = payload => ({
  type: actionTypes.ADD_MESSAGE,
  payload,
});


export const setContact = payload => ({
  type: actionTypes.SET_CONTACT,
  payload,
});

export const signOutApp = () => ({
  type: actionTypes.EXIT_APP,
});
