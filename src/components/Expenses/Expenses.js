import {useState} from 'react'
import ExpensesFilter from './ExpensesFilter'
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
const Expense = (props)=>{
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

      
    
    return(
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        </Card>
    )
}
export default Expense





// import { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
// import ExpensesFilter from './ExpensesFilter';
// import Card from '../UI/Card';
// import './Expenses.css';

// const Expense = (props) => {
//   const [filteredYear, setFilteredYear] = useState('2020');

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <Card className="expenses">
//       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

//       {filteredExpenses.length === 0 ? (
//         <p>No expenses found for the selected year.</p>
//       ) : (
//         filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))
//       )}
//     </Card>
//   );
// };

// export default Expense;
