import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="form-controll">
      <div>
        <h2>Please Register or Create an Account</h2>
        <form onSubmit="">
          <input type="email" placeholder="Your Email" />
          <br />
          <input type="password" placeholder="Your Password" />
          <br />
          <input type="password" placeholder="Re-Type Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <Link to="/login">Already Registered?</Link>
        <div>----------------------or----------------------</div>
        <button>Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
