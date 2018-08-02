import {createStore, applyMiddleware} from 'redux';
import combineReducers from '../reducer';
import thunk from 'redux-thunk'

export default ()=>{
  const store = createStore(
    combineReducers(),
    applyMiddleware(thunk)
  )
  return store
}
