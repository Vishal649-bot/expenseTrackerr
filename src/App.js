import {useState} from 'react'
import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense';
import  './components/Expenses/Expenses.css'
import Expenses from './components/Expenses/Expenses'

const DUMMY_EXPENSES = [
  { title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 2, 22) , location:'Mall' },
  { title: 'New TV', amount: 24.67, date: new Date(2023, 12, 22), location:'Mall'},
  { title: 'Car Insurance', amount: 94.67, date: new Date(2023, 1, 2), location:'Mall' },
  { title: 'Car Insurance', amount: 974.67, date: new Date(2020, 12, 22), location:'Mall' },
]


function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
 
  const addExpenseHandler = expense=>{
    // console.log(expense);
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    })
  }

  return (
    <>
    {/* <div>
    <NewExpense/>
    <div className='expenses'>
     {expense.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          
        />
      ))}
      </div>
      </div> */}
      <div>
        <NewExpense  onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
    </>
  );
}

export default App;
