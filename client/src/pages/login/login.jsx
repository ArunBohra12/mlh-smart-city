import React, { useState } from "react";
import authImg from "../../assets/auth-img.gif";
import axios from "axios";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { API, BASE_URL } from "../../utils/APIRoutes";
import { localStorageUser } from "../../utils/globalConstants";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginFormHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${BASE_URL}${API}/auth/login`, {
      email: userData.email,
      password: userData.password,
    });
    console.log(data);
    if (data.status === "success") {
      data.user.token = data.token;
      localStorage.setItem(localStorageUser, JSON.stringify(data.user));
      navigate("/");
    }
  };

  return (
    <div className='login'>
      <div className='img'>
        <img src={authImg} alt='' />
      </div>
      <div className='login-form'>
        <div className='heading'>
          <h2>CivicConnect</h2>
          <p>On the way to create sophisticated city</p>
          <div className='login-form'>
            <form className='login-details' onSubmit={handleSubmit}>
              <h5>Email ID</h5>
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={userData.email}
                onChange={(e) => loginFormHandler(e)}
              />
              <h5>Password</h5>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={userData.password}
                onChange={(e) => loginFormHandler(e)}
              />
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
