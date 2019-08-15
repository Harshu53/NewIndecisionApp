import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div>
    404!!! The page you are looking is not exists! Go to
    <Link to="/">Home Page</Link>
  </div>
);
export default PageNotFound;
