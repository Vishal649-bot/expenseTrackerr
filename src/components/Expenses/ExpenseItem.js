import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "../../../../ExpenseDetail";
import "./ExpenseItem.css";
import Card from '../UI/Card'
import "./Expenses.css"
import {useState} from 'react'

function ExpenseItem(props) {
  // const [title, setTitle] = useState()
 

  // const clickHandler = ()=>{
  //   setTitle('Updated')
  //   console.log(title);
  // }
  
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button  onClick={clickHandler}>Change Title</button> */}
        
        
      </Card>
    </>
  );
}

export default ExpenseItem;
