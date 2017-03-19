import todos from './todos';
import visibilityFilter from './visibilityFilter';
import getData from './getData';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
	todos,
	visibilityFilter,
	getData
});

export default todoApp;