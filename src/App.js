
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expense = [
    { title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 2, 22) , location:'Mall' },
    { title: 'New TV', amount: 24.67, date: new Date(2023, 12, 22), location:'Mall'},
    { title: 'Car Insurance', amount: 94.67, date: new Date(2023, 1, 2), location:'Mall' },
    { title: 'Car Insurance', amount: 974.67, date: new Date(2020, 12, 22), location:'Mall' },

  ]
  return (
    <>
     {expense.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          
        />
      ))}
    </>
  );
}

export default App;
