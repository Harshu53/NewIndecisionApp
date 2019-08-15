import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import {
  setFilterText,
  setSortByDate,
  setSortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseFilter extends React.Component {
  state = {
    FocusedInput: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate({ startDate }));
    this.props.dispatch(setEndDate({ endDate }));
  };

  onFocusChange = FocusedInput => {
    this.setState(() => ({ FocusedInput }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setFilterText({ text: e.target.value }));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if ("date" === e.target.value) {
              this.props.dispatch(setSortByDate({ sortBy: e.target.value }));
            } else if ("amount" === e.target.value) {
              this.props.dispatch(setSortByAmount({ sortBy: e.target.value }));
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={moment().startOf("month")}
          startDateId="start-date-id"
          endDate={moment().endOf("month")}
          endDateId="end-date-id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.FocusedInput}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const ExpenseFilterConnected = connect(MapStateToProps)(ExpenseFilter);

export default ExpenseFilterConnected;
