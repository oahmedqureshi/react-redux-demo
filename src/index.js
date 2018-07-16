import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// actions
import {addExpense} from './action/addExpense';
import {editExpense} from './action/editExpense';
import {setText} from './action/setText';
import {sortByAmount} from './action/sortByAmount';

// store

import configureStore from './store/appStore'

const store = configureStore();

const getVisibleExpense = (expenses, filter) => {
  return expenses.filter(expense=>{
    return expense.name.includes(filter.text)
  })
}

store.subscribe(()=>{
  const state = store.getState()
  const visibleExpense = getVisibleExpense( state.expenses, state.filter )
  console.log("store state: ", visibleExpense);
})

store.dispatch(addExpense({name:'expense',amount:300}))
store.dispatch(addExpense({name:'expense',amount:100}))
store.dispatch(addExpense({name:'expense',amount:250}))
store.dispatch(addExpense({name:'expense',amount:400}))
store.dispatch(editExpense(300, {name: 'new expense', amount:330}))
store.dispatch(setText('new'))

//console.log("store state: ",store.getState());

store.dispatch(sortByAmount())





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
