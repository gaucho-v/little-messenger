import * as actionTypes from './actionTypes';

const storageState = (user) => {
    if(user) return {name: user};
    return {}
};
const initialState = storageState(localStorage['little-messenger-user']);

export default function authStore(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case actionTypes.SET_USER: {
            return {...payload};
        }
        case actionTypes.REMOVE_USER: {
            return {};
        }
        default:
            return state;
    }
}