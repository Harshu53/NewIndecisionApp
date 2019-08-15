import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This is the info: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info, Please don't share it!</p>}
      <WrappedComponent />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {!props.isAuthenticated && <p>Please login to see the info</p>}
      <WrappedComponent />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthenticateInfo = requireAuthentication(Info);

/* ReactDOM.render(
  <AdminInfo isAdmin={true} info="There are the details" />,
  document.getElementById("root")
); */

ReactDOM.render(
  <AuthenticateInfo isAuthenticated={false} info="There are the details" />,
  document.getElementById("root")
);
