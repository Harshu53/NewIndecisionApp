import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilters";

const dashboard = () => (
  <div>
    <ExpenseFilter />
    <ExpenseList />
  </div>
);

export default dashboard;
