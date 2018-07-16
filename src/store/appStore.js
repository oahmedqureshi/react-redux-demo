import {createStore} from 'redux';
import combineReducers from '../reducer'

export default ()=>{
  const store = createStore(combineReducers())
  return store
}
