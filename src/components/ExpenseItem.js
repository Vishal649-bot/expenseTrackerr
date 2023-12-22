import './ExpenseItem.css'

function ExpenseItem(props) {
    const expenseDate = new Date(2023,12,22)
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 294.67
    const locationOfExpenditure = "Money Spent" 
    return (
        <>
         <div className='expense-item'>
         <div>{props.date.toISOString()}</div>
         <div  className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <h4>{props.location}</h4>
            
         </div>
         
         
         </div>
        </>
       );
}

export default ExpenseItem