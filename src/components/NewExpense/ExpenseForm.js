import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(true);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setIsFormVisible(false);
    };

    const cancelHandler = () => {
        setIsFormVisible(false);
    };

    const showFormHandler = () => {
        setIsFormVisible(true);
    };

    return (
        <div>
            {!isFormVisible && (
                <div className="new-addexpense__actions">
                    <button type="button" onClick={showFormHandler}>Add Expense</button>
                </div>
            )}
            {isFormVisible && (
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__controls">
                            <label>Title</label>
                            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                        </div>

                        <div className="new-expense__controls">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                value={enteredAmount}
                                onChange={amountChangeHandler}
                            />
                        </div>

                        <div className="new-expense__controls">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2019-01-01"
                                max="2022-12-31"
                                value={enteredDate}
                                onChange={dateChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                    <button type="button" onClick={cancelHandler}>Cancel</button>
                        <button type="submit">Add Expense</button>
                        
                    </div>
                </form>
            )}
        </div>
    );
};

export default ExpenseForm;
