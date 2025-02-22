import React from "react";
import "./customModel.css";
import { useSelector } from "react-redux";

const CustomModel = ({ id, showPopup, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.users);

  // Find the specific user
  const specificUser = allUsers.find((ele) => ele.id === id);

  // Handle cases where no user is found
  if (!specificUser) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <button onClick={() => setShowPopup(false)}>Close</button>
          <h2>User not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowPopup(false)}>Close</button>
        <h2>{specificUser.name}</h2>
        <h3>{specificUser.email}</h3>
        <h3>{specificUser.age}</h3>
        <h3>{specificUser.gender}</h3>
      </div>
    </div>
  );
};

export default CustomModel;
