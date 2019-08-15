import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENCE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: {
    id
  }
});

//EDIT_EXPENSE
const editExpense = (id, updateObject) => ({
  type: "EDIT_EXPENSE",
  id,
  updateObject
});

//SET_FILTER_TEXT
const setFilterText = (updatedObject = "") => ({
  type: "SET_FILTER_TEXT",
  updatedObject
});

//SET_SORT_BY_AMOUNT
const setSortByAmount = updatedObject => ({
  type: "SET_SORT_BY_AMOUNT",
  updatedObject
});

//SET_SORT_BY_DATE
const setSortByDate = updatedObject => ({
  type: "SET_SORT_BY_DATE",
  updatedObject
});

// SET_START_DATE
const setStartDate = updatedObject => ({
  type: "SET_START_DATE",
  updatedObject
});

// SET_START_DATE
const setEndDate = updatedObject => ({
  type: "SET_END_DATE",
  updatedObject
});

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      let startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      let endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      let textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if ("date" === sortBy) {
        return a.createdAt < b.createdAt ? 1 : -1;
      }

      if ("amount" === sortBy) {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const expensesReducerDefaultState = [];

// Expense Reducer
const expensesReducers = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.expense.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updateObject
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filter Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filterReducers = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_FILTER_TEXT":
    case "SET_SORT_BY_AMOUNT":
    case "SET_START_DATE":
    case "SET_END_DATE":
      return { ...state, ...action.updatedObject };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filterReducers
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);

const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);
/* 
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setFilterText({ text: "Coffee" })); */

store.dispatch(setSortByAmount({ sortBy: "amount" }));

/* store.dispatch(setSortByDate({ sortBy: "createdAt" }));

store.dispatch(setStartDate({ startDate: 125 }));
store.dispatch(setEndDate({ endDate: -100 })); */

const demoState = {
  expenses: [
    {
      id: "sdfsdfsdf",
      description: "July Rent",
      note: "Final payment for this address",
      amount: "54500",
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // Date OR amount
    startDate: undefined,
    endDate: undefined
  }
};
