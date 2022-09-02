import React from "react";
import { Link } from "react-router-dom";

function ChangePasswordTable() {
  return (
    <>
      <div className="row sharebox">
        <h1 className="my-3 mx-5 responsiveness">CHANGE PASSWORD</h1>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="container userprofileinfo">
            <h6>CHANGE PASSWORD</h6>
          </div>
          <br />
          <hr />
          <br />
          <input
            id="password"
            className="form-control mb-4 px-4 py-3"
            placeholder="Current Password"
          />
          <input
            id="npassword"
            className="form-control mb-4 px-4 py-3"
            placeholder="New Password"
          />
          <input
            id="cpassword"
            className="form-control mb-4 px-4 py-3"
            placeholder="Confirm New Password"
          />
          <button className="btn btn-primary usercartbtn">
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordTable;
