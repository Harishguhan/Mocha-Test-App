import React, { useState } from "react";

import './Login.css';

const Login = () => {


  return (
    <div className="container-fluid login-background">
      <div className="row login-content">
        <h1 className="">Login</h1>
        <form>
          <div className="form-group groups">
            <label>Email</label>
            <br />
            <input
                id="email"
              type="email"
              placeholder="Enter Your Email"
              name="name"
              className="inputs-field"
            />
          </div>
          <div className="form-group groups">
            <label>Password</label>
            <br />
            <input
            id="password"
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="inputs-field"
            />
          </div>
          <button className="log-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;