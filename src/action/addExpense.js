import database from '../firebase/firebase.connection'

export const addExpense = (payload)=>(
  {
    type: 'ADD_EXPENSE',
    payload
  }
)
export const addExpenseSync = (payload)=>{

  return (dispatch)=>{
    database.ref('todo').push(payload)
      .then(()=>{
        dispatch(addExpense(payload))
      })
      .catch((error)=>{
        console.log(error)
      })
  }
}