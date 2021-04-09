import React from "react";
import "../UserLogin/UserLogin.css";
import LoginForm from "../../components/LoginForm/LoginForm"

const Login = () => {
  return (
    <div>
        <h1 id="loginFormHeader">Login in to your account</h1>
      <div class="login-formbox col-md-6">
        <LoginForm />
        </div>

       
   
    </div>
  );
};

export default Login;
