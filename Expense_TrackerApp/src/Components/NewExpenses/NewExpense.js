import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addnewexpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelbuttonHandler = () => {
    setIsEditing(false);
  };
  const saveexpenseDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onSaveexpense(expense);
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={addnewexpenseHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveexpensesData={saveexpenseDataHandler}
          onCancel={cancelbuttonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
