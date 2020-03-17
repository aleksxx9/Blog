import { combineReducers } from 'redux';
import showSuccessMessage from "./showSuccessMessage"
import { reducer } from 'redux-form';

const reducers = combineReducers({
  form: reducer,
  showSuccessMessage
});

export default reducers;