import React, { createContext, useState } from "react";
import axios from "axios"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth , setIsAuth] = useState("")
  const login = (email,password) => 
  {
    axios
    .post("https://reqres.in/api/login",{email,password})
    .then(({data})=>{
      setIsAuth(data.token)
    })
    setIsAuth(true)
    
    alert("You are now logged in")
  }
  const logout = () => 
  {
   setIsAuth(false)
   alert("You are now logged Out")
  }
  
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
