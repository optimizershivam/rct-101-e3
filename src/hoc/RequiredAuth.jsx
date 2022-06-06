import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {isAuth} = useContext(AuthContext)
  // const location = useLocation();


  if(isAuth)
  return <Navigate to ="/login" ></Navigate>;
};

export default RequiredAuth;
