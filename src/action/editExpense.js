export const editExpense = (amount, payload)=>(
  {
    type: 'EDIT_EXPENSE',
    amount,
    payload
  }
)