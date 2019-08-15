// Filter Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

export default (state = filterReducerDefaultState, action) => {
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
