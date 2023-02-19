import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";

const ExpenseList = (props) => {
  const [pickedYear, setPickedYear] = useState("");

  const pickYearHandler = (savedPickYear) => {
    setPickedYear(savedPickYear);
    console.log(savedPickYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={pickedYear} onSavedYear={pickYearHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpenseList;
