const filterReducerState = {
  text :'',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

export const filterReducer = (state = filterReducerState, action) =>{
  switch (action.type) {
    case 'SET_TEXT':
    return {
      ...state,
      text: action.payload
    }
    case 'SORT_BY_AMOUNT':
    return {
      ...state,
      sortBy: 'acount'
    }

    default:
      return state
  }
}