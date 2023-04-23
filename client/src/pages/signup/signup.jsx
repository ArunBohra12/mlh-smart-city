import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API, BASE_URL } from "../../utils/APIRoutes.js";
// import { localStorageUser } from "../utils/globalConstants";
import authImg from "../../assets/auth-img.gif";
import { localStorageUser } from "../../utils/globalConstants";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    aadhaarCardNumber: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  });
  const [photo, setPhoto] = useState();
  const navigate = useNavigate();

  const signupHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const postImage = (pics) => {
    console.log(pics);
    if (!pics) return;
    const pic = pics[0];
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dkgrvhkxb");
      fetch("https://api.cloudinary.com/v1_1/dkgrvhkxb/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPhoto(data.url.toString());
          console.log(data);
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("errrrrrorrrr");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(`${BASE_URL}${API}/auth/signup`, {
      name: userData.name,
      email: userData.email,
      photo: photo,
      aadhaarCardNumber: userData.aadhaarCardNumber,
      phoneNumber: userData.phoneNumber,
      password: userData.password,
      passwordConfirm: userData.passwordConfirm,
    });
    console.log(data);
    if (data.status === "success") {
      data.user.token = data.token;
      localStorage.setItem(localStorageUser, JSON.stringify(data.user));
      navigate("/");
    }
  };

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
            <form onSubmit={submitHandler}>
              <h5>Name</h5>
              <input
                type='text'
                name='name'
                placeholder='Your name'
                value={userData.name}
                onChange={(e) => signupHandler(e)}
              />
              <h5>Email ID</h5>
              <input
                type='email'
                name='email'
                placeholder='Your Email Id'
                value={userData.email}
                onChange={(e) => signupHandler(e)}
              />
              <h5>Upload Picture</h5>
              <input type='file' accept='image/*' onChange={(e) => postImage(e.target.files)} />
              <h5>Aadhar Card</h5>
              <input
                type='text'
                name='aadhaarCardNumber'
                placeholder='Aadhaar Card Number'
                value={userData.aadhaarCardNumber}
                onChange={(e) => signupHandler(e)}
              />
              <h5>Phone Number</h5>
              <input
                type='text'
                name='phoneNumber'
                placeholder='Phone Number'
                value={userData.phoneNumber}
                onChange={(e) => signupHandler(e)}
              />
              <div className='passwords'>
                <div>
                  <h5>Password</h5>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={userData.password}
                    onChange={(e) => signupHandler(e)}
                  />
                </div>
                <div>
                  <h5>Confirm Password</h5>
                  <input
                    type='password'
                    name='passwordConfirm'
                    placeholder='Confirm Password'
                    value={userData.passwordConfirm}
                    onChange={(e) => signupHandler(e)}
                  />
                </div>
              </div>
              <button type='submit'>Create Account</button>
              <h4>
                Already have an account?? <Link to='/login'>Sign In!!</Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
