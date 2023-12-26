import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetail";
import "./ExpenseItem.css";
import Card from '../UI/Card'
import "./Expenses.css"
import {useState} from 'react'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)

  const clickHandler = ()=>{
    setTitle('Updated')
    console.log(title);
  }
  const clickbtnHandler = ()=>{
    setAmount(100)
    console.log(title);
  }
  
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        </div>
        <button  onClick={clickHandler}>Change Title</button>
        <button  onClick={clickbtnHandler}>Change Price</button>
        
      </Card>
    </>
  );
}

export default ExpenseItem;
