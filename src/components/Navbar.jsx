import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const allUsers = useSelector((state) => state.app.users);
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);
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
                All Post ({allUsers.length})
              </Link>
            </li>
          </ul>
          <input
            className="form-control me-2 w-50"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearchData(e.target.value);
              dispatch(searchUser(e.target.value));
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
