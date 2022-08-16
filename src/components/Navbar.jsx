import React , {useState} from "react";
import {NavLink} from 'react-router-dom'
import { useSelector } from "react-redux";

export default function Navbar() {
  const currentCartLength = useSelector((state) => state.handleCart);
  const currentUser = useSelector((state) => state.auth);
  const [isLoggedin, setIsLoggedin] = useState(false);

  
  console.log(currentUser);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-2 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 text-black" to="#">
            FoodieBuy
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link active text-black text-opacity-75" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black text-opacity-75" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black text-opacity-75" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to="/cart" className="btn btn-outline-dark">
                    <i className="fa-solid   fa-shopping-cart me-2 "></i>Cart ({currentCartLength?.length})
                </NavLink>
                <NavLink to="/login" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-2"></i>Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-2"></i>Register</NavLink>
                
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
