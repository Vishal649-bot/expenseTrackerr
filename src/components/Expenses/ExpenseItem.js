import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetail";
import "./ExpenseItem.css";
import Card from '../UI/Card'
import "./Expenses.css"
function ExpenseItem(props) {
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <ExpenseDetails
            amount={props.amount}
            location={props.location}
            title={props.title}
          />
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;
