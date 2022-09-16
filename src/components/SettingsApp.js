import React from "react";

function SettingsApp() {
  return (
    <>
      <h6 className="px-1">APPS</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <h1 className="boldtext">Impressum</h1>
          <hr />
          <label for="titleimpress" className="mt-3">
            Title of Impressum:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Impressum"
          />
          <label for="impressum" className="mt-3">
            Impressum:
          </label>
          <textarea
            id="impressum"
            className="form-control my-2 py-2"
            type="text"
            rows="5"
          />
          <h1 className="boldtext mt-5">Print Node</h1>
          <hr />
          <label for="titleimpress" className="mt-3">
            Print Node API Key:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Enter printnode.com api key"
          />
          <label for="titleimpress" className="mt-3">
            Main Thermal Printer ID:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Enter printnode printer  ID"
          />
          <label for="titleimpress" className="mt-3">
            Kitchen Thermal Printer ID:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Enter printnode printer ID"
          />
          <label for="titleimpress" className="mt-3">
            Standard Printer ID:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Enter printnode printer ID for A4 Invoice printing"
          />
          <label for="titleimpress" className="mt-3">
            Print A4 Standard order when:
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1">We accept the order</option>
            <option value="2" selected>
              On order received
            </option>
          </select>
          <label for="titleimpress" className="mt-3">
            Print on main thermal printer when:
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1" selected>
              We accept the order
            </option>
            <option value="2">On order received</option>
          </select>
          <label for="titleimpress" className="mt-3">
            Print on kitchen thermal printer when:
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1" selected>
              We accept the order
            </option>
            <option value="2">On order received</option>
          </select>
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2 w-25">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsApp;
