import React from "react";

function ReferralScheme() {
  return (
    <>
      <h6 className="px-1">REFERRAL SCHEME</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <p className="boldtext">Referral Scheme</p>
          <div className="form-check form-switch text-start my-2 w-50">
            <div className="row justify-content-between">
              <label className="form-check-label" for="referral">
                Referral Status
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="referral"
              />
            </div>
          </div>
          <label for="referee" className="mt-3">
            Referee (New Customer):
          </label>
          <input
            id="referee"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="0"
          />
          <label for="referrer" className="mt-3">
            Referrer (Existing Customer):
          </label>
          <input
            id="referrer"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="0"
          />
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2 w-25">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferralScheme;
