import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h4 className="navbar-brand">HOPE</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Current Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className="nav-link" href="#">
                All Post
              </Link>
            </li>
          </ul>
          <input
            className="form-control me-2 w-50"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
