import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetail";
import "./ExpenseItem.css";
import Card from '../UI/Card'
import "./Expenses.css"
function ExpenseItem(props) {
  const clickHandler = ()=>{
    console.log('clicked!!!');
  }
  const deleteHandler = ()=>{
    const expense = document.querySelector(".expense-item")
    expense.remove()
  }
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        <button  onClick={clickHandler}>Change Title</button>
        <button  onClick={deleteHandler}>Delete</button>
      </Card>
    </>
  );
}

export default ExpenseItem;
