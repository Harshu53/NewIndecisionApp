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

export default getVisibleExpenses;
