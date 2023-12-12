import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginwithGoogle from 'component/LoginwithGoogle';
import Button from 'component/Shared/Button';
import RegisterFeatures from './RegisterFeatures';
import CustomInput from './CustomInput';
import './registration.css';

const Registration = () => {
  const errRef = useRef();
  const Navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');
  const [userRegistration, setUserRegistration] = useState({
    fName: "",
    lName: " ",
    email: "",
    proname: "",
    password: "",
    confirmpassword: ""
  });


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value })
  }

  const handleSubmit = async (e) => {

  }

  return (
    <div className="registration" >
      <div className="registration-about">
        <h1>Unlock Your Free Account. We're Beyond Basic To-Do List and Project Management Apps.</h1>
        <div className="register-features">
          <RegisterFeatures placeholder="Prioritize Tasks Based On Importance and Urgency" />
          <RegisterFeatures placeholder="Boost productivity; track daily hours"/>
          <RegisterFeatures placeholder="Heatmap Chart to track Consistency" />
          <RegisterFeatures placeholder="Advanced Personality Evaluation Algorithm"/>
        </div>
      </div>
      <div className="registration-form">
        <div className="registration-content">
          <h3>Get started with</h3>
          {/* Login with Google component */}
          <LoginwithGoogle />
          {/* Or separator */}
          <p>-------------------------------or-------------------------------</p>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-divve="assertive">{errMsg}</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* First Name and Last Name using CustomInput component */}
          <div className="user-name">
            <CustomInput labelFor='fName' labelText='First Name' type='text'
              autoComplete='off' value={userRegistration.fName} onChange={handleInput}
              name='fName' id='fName' width="140px" className="user-fname"
              placeholder="Enter  FirstName"
            />
            <CustomInput labelFor='lName' labelText='Last Name' type='text'
              autoComplete='off' value={userRegistration.lName} onChange={handleInput}
              name='lName' id='lName' width="140px" className="user-lname"
              placeholder="Enter LastName"
            />
          </div>
          <div className="other-input">
            <CustomInput labelFor='email' labelText='Email' type='email'
              autoComplete='off' value={userRegistration.email} onChange={handleInput}
              name='email' id='email' className="user-email" width="290px"
              placeholder="Enter Email Id"
            />
            <CustomInput labelFor='proname' labelText='Profession' type='text'
              autoComplete='off' value={userRegistration.proname} onChange={handleInput}
              name='proname' id='proname' className="user-prof" width="290px"
              placeholder="Enter Profession e.g. Student"
            />
            <CustomInput labelFor='password' labelText='Password'
              type='password' autoComplete='off' value={userRegistration.password}
              onChange={handleInput} name='password' id='password' className="user-password" width="
              290px" placeholder="Enter Password"
            />
            <CustomInput labelFor='confirmpassword' labelText='Confirm Password'
              type='password' autoComplete='off' value={userRegistration.confirmpassword}
              onChange={handleInput} name='confirmpassword' id='confirmpassword' className="pass-confirm"
              width="290px" placeholder="Enter Confirm Password"
            />
            {/* Submit button */}
            <Button type='submit' width="80px" className="regi-submit">Register</Button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Registration