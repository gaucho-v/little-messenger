import {combineReducers} from 'redux';
import authStore from './auth/reducer';
import appStore from "./app/reducer";

export default combineReducers({
    authStore: authStore,
    appStore: appStore
});