import database from '../firebase/firebase.connection';

export const editExpense = (amount, payload)=>(
  {
    type: 'EDIT_EXPENSE',
    amount,
    payload
  }
)
export const editExpenseSync = (amount, payload)=>{
  console.log('payload: ', payload);
  return (dispatch) => {
    editExpense( amount, payload)
  }
  // return dispatch =>{
  //   database.ref('todos/-LI_dA3LrrU2NJWSDE4c').update({

  //   })
  // }
}