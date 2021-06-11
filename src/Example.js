import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Example() {
  return (
    <div>
      <h1>Hello from the Example Page</h1>

      <Link className="back" to="/">
        Back
      </Link>
    </div>
  );
}
export default Example;
