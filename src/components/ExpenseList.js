import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import expenseSelector from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <h1>This is Expense List.</h1>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapToState = state => {
  return {
    expenses: expenseSelector(state.expenses, state.filters)
  };
};

export default connect(mapToState)(ExpenseList);
