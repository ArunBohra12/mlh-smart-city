import React from "react";
import authImg from "../../assets/auth-img.gif";

import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='login'>
      <div className='img'>
        <img src={authImg} alt='' />
      </div>
      <div className='login-form'>
        <div className='heading'>
          <h2>SmartCity</h2>
          <p>On the way to create sophisticated city</p>
          <div className='login-form'>
            <form className='login-details'>
              <h5>Email ID</h5>
              <input type='email' name='' id='' />
              <h5>Password</h5>
              <input type='password' name='' id='' />
              <div className='buttons'>
                <button type='submit' className='login-button'>
                  Login
                </button>
                <Link to='/signup'>
                  <button className='back'>Sign Up</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
