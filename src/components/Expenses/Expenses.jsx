import Card from "../UI/Card.comp";
import ExpensesFilter from "./ExpensesFilter.comp";
import ExpenseTotal from "./ExpenseTotal.comp";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

import "./Expenses.scss";

const currentYear = new Date().getFullYear();

export default function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) =>
      expense.date.getFullYear().toString() === filteredYear.toString()
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
      <ExpenseTotal expenses={filteredExpenses} />
    </Card>
  );
}
