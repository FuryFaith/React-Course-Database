import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveexpenseDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onSaveexpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveexpensesData={saveexpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
