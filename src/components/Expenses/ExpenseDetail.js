
function ExpenseDetail(props) {
  return (
   <>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>${props.amount}</div>
    <h4>{props.location}</h4> 
   </>
  )
}

export default ExpenseDetail