import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="writes">
            <h2>
              Pulse<span>.</span>
            </h2>
          </div>
          <div className="lists">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <Link to={"/admin"}>Admin</Link>
              </li>
              <li>
                <Link to={"/basket"}>Basket</Link>
              </li>
              <li>
                <Link to={"/add"}>Add</Link>
              </li>
            </ul>
          </div>
          <div className="phone">
            <span className="reser">Reservations</span>
            <span className="phone_span">
              <i className="fa-solid fa-phone"></i> 652-345 3222 11
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
