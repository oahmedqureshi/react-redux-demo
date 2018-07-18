export const getVisibleExpense = (expenses, filter) => {
  return expenses.filter(expense=>{
    return expense.name.includes(filter.text)
  })
}