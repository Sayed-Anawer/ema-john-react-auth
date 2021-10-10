import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/shop";
  const handleSignWithGoogleForRedirect = () => {
    signInWithGoogle().then(() => {
      history.push(redirect_uri);
    });
  };
  console.log(location.state?.from);
  return (
    <div className="form-controll">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to ema-john? <Link to="/register">Create a new Account</Link>
        </p>
        <div>----------------------or----------------------</div>
        <button onClick={handleSignWithGoogleForRedirect}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
