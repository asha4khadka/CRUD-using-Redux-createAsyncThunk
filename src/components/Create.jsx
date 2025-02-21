import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            className="gender"
            onChange={getUserData}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="mb-3">
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            className="gender"
            onChange={getUserData}
          />
          <label htmlFor="female">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
