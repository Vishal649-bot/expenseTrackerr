
import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    //   document.getElementById('').addEventListener('click', (event)=>{

    //   })
    const [enteredtitle, setenteredtitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState('')
    const [enteredDate, setenteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setenteredtitle(event.target.value)
        console.log(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value)
        console.log(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value)
        console.log(event.target.value);
    }
 
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
       props.onSaveExpenseData(expenseData)
        setenteredtitle('')
        setenteredAmount('')
        setenteredDate('')
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
            </div>

            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="nuumber" min="0.01" step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler} />
            </div>

            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler} />
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>

        </div>

    </form>
}

export default ExpenseForm