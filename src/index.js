import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ExpensifyApp from "./Routes/AppRouter";
import createStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setFilterText,
  setSortByAmount,
  setSortByDate,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles.css";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
const rootElement = document.getElementById("root");

const store = createStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 300, createdAt: 1000 })
);

store.dispatch(addExpense({ description: "Utility bill", amount: 500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <ExpensifyApp />
  </Provider>
);

ReactDOM.render(jsx, rootElement);
