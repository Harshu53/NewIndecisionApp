//SET_FILTER_TEXT
export const setFilterText = (updatedObject = "") => ({
  type: "SET_FILTER_TEXT",
  updatedObject
});

//SET_SORT_BY_AMOUNT
export const setSortByAmount = updatedObject => ({
  type: "SET_SORT_BY_AMOUNT",
  updatedObject
});

//SET_SORT_BY_DATE
export const setSortByDate = updatedObject => ({
  type: "SET_SORT_BY_DATE",
  updatedObject
});

// SET_START_DATE
export const setStartDate = updatedObject => ({
  type: "SET_START_DATE",
  updatedObject
});

// SET_START_DATE
export const setEndDate = updatedObject => ({
  type: "SET_END_DATE",
  updatedObject
});
