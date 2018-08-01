import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

// selectors
import { getVisibleExpense }  from './selectors';

// actions
import {addExpense} from './action/addExpense';
import {editExpense} from './action/editExpense';
//import {setText} from './action/setText';
//import {sortByAmount} from './action/sortByAmount';


// store
import configureStore from './store/appStore'

// firebase database

 import database from  './firebase/firebase.connection'
// database.ref().set({myname:"Owais Ahmed Qureshi"})

console.log("process.env: ",process.env)


database
  .ref('todo')
  .on('value', (snapshot)=>{
    const todos = []

    snapshot.forEach((childSnap)=>{

      todos.push({
        id: childSnap.key,
        ...childSnap.val()
      });
    
    })
    console.log("todos: ",todos)
  })
//   database
//   .ref('todos/-LIV_nIQvHuGn2ubY-LW')
//   .update(
//     {
//       ETA: 14
//     })
  
// database
// .ref('todos')
// .push({
//   name:'todo1',
//   description: 'my first firebase todo app',
//   isCompleted: false,
//   ETA: 12
// })

// database
//   .ref('location/city')
//   .remove()
//   .then(()=>{
//     console.log("remove success")
//   })
//   .then(()=>{
//     console.log("remove error")
//   })




const store = configureStore();

store.subscribe(()=>{
  const state = store.getState()
  console.log("state: ",state)
  const visibleExpense = getVisibleExpense( state.expenses, state.filter )
  console.log("store state: ", visibleExpense);
})

// store.dispatch(addExpense({name:'expense',amount:300}))
// store.dispatch(addExpense({name:'expense',amount:100}))
// store.dispatch(addExpense({name:'expense',amount:250}))
// store.dispatch(addExpense({name:'expense',amount:400}))
// store.dispatch(editExpense(300, {name: 'new expense', amount:330}))
//store.dispatch(setText('new'))

// store.dispatch(sortByAmount())





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
