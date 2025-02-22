import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModel from "./customModel/CustomModel";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [filterAll, setFilterAll] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      {showPopup && (
        <CustomModel
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className=""> All Data Display</h2>
      <input
        class="form-check-input"
        name="gender"
        type="radio"
        checked={filterAll === ""}
      />
      <label class="form-check-label">All</label>
      <input
        class="form-check-input"
        name="gender"
        value="Male"
        type="radio"
        checked={filterAll === "Male"}
        onChange={(e) => setFilterAll(e.target.value)}
      />
      <label class="form-check-label">Male</label>

      <input
        class="form-check-input"
        name="gender"
        value="Female"
        checked={filterAll === "Female"}
        type="radio"
        onChange={(e) => setFilterAll(e.target.value)}
      />
      <label class="form-check-label">Female</label>

      <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (filterAll === "Male") {
                return ele.gender === filterAll;
              } else if (filterAll === "Female") {
                return ele.gender === filterAll;
              } else {
                return ele;
              }
            })
            .map((ele) => (
              <div key={ele.id} className="card w-50 mx-auto">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                  <p className="card-text">{ele.gender}</p>
                  <button
                    className="card-link"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="card-link"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
