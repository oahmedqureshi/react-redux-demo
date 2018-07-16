const expensesReducerState = []


export const expensesReducer = (state = expensesReducerState, action) =>{
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.payload
      ]
    case 'EDIT_EXPENSE':
    console.log("EDIT_EXPENSE", state, action);
      return [
        ...state.map(expense=>{
          if(expense.amount === action.amount){
            return action.payload
          }else{
            return expense
          }
        }),
      ]
    default:
      return state
  }
}