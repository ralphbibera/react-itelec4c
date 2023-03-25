import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <form className="d-flex flex-column border m-5 bg-body-tertiary rounded w-75 justify-content-center mx-auto bg-secondary text-white">
      <h1 className="py-3 mx-auto fw-bold">Sign Up</h1>
      <div className="w-50 mx-auto mb-3">
        <label className="form-label ms-3 fw-bold">First Name</label>
        <input className="form-control" placeholder="Enter First Name" />
      </div>
      <div className="w-50 mx-auto mb-3">
        <label className="form-label ms-3 fw-bold">Last Name</label>
        <input className="form-control" placeholder="Enter Last Name" />
      </div>{" "}
      <div className="w-50 mx-auto mb-3">
        <label className="form-label ms-3 fw-bold">Email Address</label>
        <input className="form-control" placeholder="Enter Email Address" />
      </div>{" "}
      <div className="w-50 mx-auto mb-3">
        <label className="form-label ms-3 fw-bold">Password</label>
        <input className="form-control" placeholder="Enter Password" />
      </div>
      <button className="btn btn-dark w-50 mx-auto">Sign Up</button>
      <p className="mb-3 w-50 mx-auto text-end">
        Already registered? <a href="/" className="text-dark">sign in?</a>
      </p>
    </form>
);
