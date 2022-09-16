import React from "react";

function Configuration() {
  return (
    <>
      <h6 className="px-1">CONFIGURATION</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <label for="pre-order">Pre Order Time (in mins)</label>
          <input
            id="pre-order"
            className="form-control my-2 py-2 w-50"
            type="text"
            placeholder="1000"
          />
          <label for="otp" className="boldtext mt-4">
            Customer OTP Verification
          </label>
          <input
            id="otp"
            className="form-control my-2 py-2 w-50"
            type="text"
            placeholder="No"
          />
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2 w-25">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Configuration;
