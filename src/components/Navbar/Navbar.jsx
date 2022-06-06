import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const{isAuth,logout} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleClick = () => 
  {
    if(isAuth)
    {
      logout()
    }
    else
    {
     navigate("/login")
    }
  }
  return (
    <div style={{display:"flex", gap:"20px", padding:"20px"}} data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart:{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
