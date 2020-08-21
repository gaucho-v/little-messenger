import * as actionTypes from './actionTypes';


export default function appStore(state = { foundedContacts: null }, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_CONTACT: {
      return { ...state, ...payload };
    }
    case actionTypes.ADD_MESSAGE: {
      return { ...state, messages: payload };
    }
    case actionTypes.SET_SEARCH_CONTACTS: {
      return { ...state, foundedContacts: payload };
    }
    case actionTypes.EXIT_APP: {
      return {};
    }
    default:
      return state;
  }
}