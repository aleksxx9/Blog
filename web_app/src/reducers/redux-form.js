import {  combineReducers } from 'redux';
import { reducer } from 'redux-form';

const reduxFormReducer = combineReducers({
  form: reducer, // mounted under "form"
}
);

export default reduxFormReducer;