import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {Login} = useContext(AuthContext)
  const[loginData, setLoginData] = useState({ "email": "eve.holt@reqres.in",
  "password": "cityslicka"})


  const handleChange = (e) => 
  {
   const {name,value} = e.target
   setLoginData({...loginData,[name]:value})
  }
  const handleSubmit = (e) => 
  {
    e.preventDeafult()
    if(loginData.email&& loginData.password)
    {
    Login(loginData.email,loginData.password)
    
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"flex", gap:"20px", flexDirection:"column",maxWidth:"200px",margin:"auto"}}>
      <input data-cy="login-email" placeholder="Enter email..." name="email" type="email" Value={loginData.email} onChange={handleChange} />
      <input data-cy="login-password" placeholder="Enter Password"  name="password" type="password" Value={loginData.password} onChange={handleChange}  />
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
