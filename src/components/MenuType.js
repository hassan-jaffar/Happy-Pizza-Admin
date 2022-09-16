import React from "react";

function MenuType() {
  return (
    <>
      <h6 className="px-1">MENU TYPE</h6>
      <hr />
      <br />
      <div className="container d-flex menutypesetting">
        <div className="form-check my-2 mx-5">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault0"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Uppercase
          </label>
        </div>
        <div className="form-check my-2 mx-5">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault0"
            id="flexRadioDefault3"
          />
          <label className="form-check-label" for="flexRadioDefault3">
            Lowercase
          </label>
        </div>
        <div className="form-check my-2 mx-5">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault0"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Capitalized
          </label>
        </div>
      </div>
      <div className="container mt-5 text-center">
        <button className="btn btn-info py-2 w-25">Save</button>
      </div>
    </>
  );
}

export default MenuType;
