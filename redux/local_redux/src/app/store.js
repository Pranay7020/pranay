import { legacy_createStore } from 'redux';
import { myOwnReducer } from '../reducer/Reducer';

export const myOwnStore = legacy_createStore(myOwnReducer);
