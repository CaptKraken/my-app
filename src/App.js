import "./App.css";
import React, { Component, useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem.comp";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_DATA = [
  {
    id: "ei1",
    title: "car insurance",
    amount: 295.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "ei2",
    title: "utilities",
    amount: 150,
    date: new Date(2021, 2, 5),
  },
  {
    id: "ei3",
    title: "car wash",
    amount: 6,
    date: new Date(2021, 2, 16),
  },
  {
    id: "ei4",
    title: "new TV",
    amount: 599,
    date: new Date(2021, 1, 10),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
