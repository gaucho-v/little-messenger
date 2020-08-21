import * as actionTypes from './actionTypes';
import firebase, { providerGit } from '../../api/firebase';
import * as support from './index';
import axios from 'axios';
import * as constants from '../../constants';
import { message } from 'antd';

export const loadUserData = user => async dispatch => {
  try {
    const response = await axios.get(`${constants.FB_URL}/users/${user}/.json`);
    const userData = { ...response.data };
    support.saveUserInStorage(userData.name);
    dispatch(signIn({ ...userData }));
  } catch (e) {
    message.error('Произошла ошибка');
    console.log('Error', e);
  }
};

export const authWithEmail = (email, pass) => async dispatch => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass);
    const userData = support.spreadUserData(response);
    support.saveUserInStorage(userData.name);
    dispatch(signIn({ ...userData }));
    return true;
  } catch (e) {
    message.error('Произошла ошибка');
    console.log('Error', e);
  }
};

export const authGithub = () => async dispatch => {
  try {
    const response = await firebase.auth().signInWithPopup(providerGit);
    const userData = support.spreadUserData(response);
    support.saveUserInStorage(userData.name);
    dispatch(signIn({ ...userData }));
    return true;
  } catch (e) {
    console.log('Error', e);
  }
};

export const registration = (email, pass) => async dispatch => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass);
    const userData = support.spreadUserData(response);
    await axios.put(`${constants.FB_URL}/users/${userData.name}.json`, {
      ...userData,
    });
    support.saveUserInStorage(userData.name);
    dispatch(signIn({ ...userData }));
    return true;
  } catch (e) {
    console.log('Error', e);
  }
};

export const changeContacts = (contacts, userName) => async dispatch => {
  await axios.put(
    `${constants.FB_URL}/users/${userName}/contacts/.json`,
    contacts
  );
  dispatch(setContact(contacts));
};


const setContact = payload => ({
  type: actionTypes.SET_NEW_CONTACT,
  payload,
});

export const signIn = payload => ({
  type: actionTypes.SET_USER,
  payload,
});


export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('Logout successful');
    })
    .catch(e => {
      console.log(e);
    });
  return { type: actionTypes.REMOVE_USER };
};
