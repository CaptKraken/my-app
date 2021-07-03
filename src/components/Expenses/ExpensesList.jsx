import "./ExpensesList.scss";
import ExpenseItem from "./ExpenseItem.comp";

export default function ExpensesList({ filteredExpenses }) {
  if (filteredExpenses.length <= 0) {
    return (
      <div className="nope404">
        <h2>404</h2>
        <p className="no-expense">No Expense Record</p>
      </div>
    );
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </ul>
  );
}
