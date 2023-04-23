import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

import authImg from "../../assets/auth-img.gif";

const Signup = () => {
  return (
    <div className='signup'>
      <div className='back-img'>
        <img src={authImg} alt='' />
      </div>
      <div className='signup-form'>
        <div className='head'>
          <h2>SmartCity</h2>
          <p>On the way to create sophisticated city</p>
          <div className='form'>
            <form>
              <h5>Name</h5>
              <input type='text' name='' id='' />
              <h5>Email ID</h5>
              <input type='email' name='' id='' />
              <h5>Upload Picture</h5>
              <input type='file' name='' id='' />
              <h5>Aadhar Card</h5>
              <input type='text' name='' id='' />
              <h5>Phone Number</h5>
              <input type='text' name='' id='' />
              <div className='passwords'>
                <div>
                  <h5>Password</h5>
                  <input type='password' name='' id='' />
                </div>
                <div>
                  <h5>Confirm Password</h5>
                  <input type='password' name='' id='' />
                </div>
              </div>
              <button type='submit'>Create Account</button>
              <h4>
                Already have an account?? <Link to="/login" >Sign In!!</Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
