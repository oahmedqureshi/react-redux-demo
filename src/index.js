import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

// routes component
import Routes from './routes';

// selectors
//import { getVisibleExpense }  from './selectors';

// actions
import {addExpense} from './action/addExpense';
import {editExpense} from './action/editExpense';
//import {setText} from './action/setText';
//import {sortByAmount} from './action/sortByAmount';


// store

import configureStore from './store/appStore'

const store = configureStore();

// store.subscribe(()=>{
//   const state = store.getState()
//   console.log("state: ",state)
//   const visibleExpense = getVisibleExpense( state.expenses, state.filter )
//   console.log("store state: ", visibleExpense);
// })

store.dispatch(addExpense({name:'expense',amount:300}))
store.dispatch(addExpense({name:'expense',amount:100}))
store.dispatch(addExpense({name:'expense',amount:250}))
store.dispatch(addExpense({name:'expense',amount:400}))
store.dispatch(editExpense(300, {name: 'new expense', amount:330}))
//store.dispatch(setText('new'))

// store.dispatch(sortByAmount())

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
    {/* <App /> */}
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
