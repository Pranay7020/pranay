import { createStore, combineReducers } from 'redux';
import { todoReducer } from '../Reducer/Todos/Reducer';

const rootReducer = combineReducers({
  todo: todoReducer
});

export const myOwnStore = createStore(rootReducer);
