
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm'

const NewExpense = (props)=>{

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expeseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expeseData)
    }

    return(
    <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    )
}
export default NewExpense