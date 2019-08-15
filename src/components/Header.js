import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Header</h1>
    <p>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
    </p>
    <p>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
    </p>
    <p>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </p>
  </div>
);

export default Header;
