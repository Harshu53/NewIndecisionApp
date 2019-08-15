import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import CreateExpense from "../components/CreateExpense";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import PageNotFound from "../components/PageNotFound";

const expensifyApp = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={CreateExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default expensifyApp;