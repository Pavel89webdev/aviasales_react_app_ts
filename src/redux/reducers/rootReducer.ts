import { combineReducers } from 'redux';
import filters from './filters';
import tickets from './tickets';
import sort from './sort';

const rootReducer = combineReducers({ tickets, filters, sort });

export default rootReducer;
