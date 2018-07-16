import { combineReducers } from 'redux';
import {expensesReducer} from './expenseReducer';
import {filterReducer} from './filterReducer';

export default ()=>{
  const combine = combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
  return combine
}