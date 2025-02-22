import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";
import { useDispatch } from "react-redux";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const { users = [] } = useSelector((state) => state.app);

  useEffect(() => {
    console.log("ID from useParams:", id); // Debugging
    console.log("Users from Redux:", users); // Debugging

    if (id && users.length > 0) {
      const specificUser = users.find((ele) => String(ele.id) === id);
      console.log("Found User:", specificUser); // Debugging

      if (specificUser) {
        setUpdateData({ ...specificUser, id }); 
      }
    }
  }, [id, users]);

  // Handle Input Change
  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!updateData.id) {
      console.error("User ID is missing!");
      return;
    }
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h2>Edit the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={updateData.name}
            onChange={handleChange}
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
            value={updateData.email}
            onChange={handleChange}
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
            value={updateData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="radio"
            name="gender"
            value="Male"
            id="male"
            checked={updateData.gender === "Male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="mb-3">
          <input
            type="radio"
            name="gender"
            value="Female"
            id="female"
            checked={updateData.gender === "Female"}
            onChange={handleChange}
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

export default Update;
