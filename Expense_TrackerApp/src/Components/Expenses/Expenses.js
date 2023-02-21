import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("");

  const pickYearHandler = (savedPickYear) => {
    setPickedYear(savedPickYear);
  };

  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={pickedYear} onSavedYear={pickYearHandler} />
        <ExpenseChart expenses={FilteredExpenses} />
        <ExpenseList items={FilteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
