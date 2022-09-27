import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function AddResturant() {
  return (
    <>
      <Navbar />

      {/* side Dashboard menu  */}

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-lg-3 col-xl-2 px-sm-2 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">OWNER</h5>
              <ul
                className="nav nav-tabs mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link to="/home" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-house"></i>
                    <span className="ms-1 d-none d-sm-inline"> Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/liveorders"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="ms-1 d-none d-sm-inline">Live Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline"> Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/customers"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="ms-1 d-none d-sm-inline"> Customers</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-book"></i>
                    <span className="ms-1 d-none d-sm-inline"> Menu</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/setting"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-gear"></i>
                    <span className="ms-1 d-none d-sm-inline"> Setting</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={{ border: "none" }}>
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed boldtext align-middle "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          style={{ padding: "1rem" }}
                        >
                          <i className="fa-solid fa-arrows-to-dot"></i>
                          <span className="ms-1">Marketing</span>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/coupon"
                            >
                              <i className="fa-solid fa-tag btnicon"></i>
                              Discounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/bulksms"
                            >
                              <i className="fa-solid fa-message btnicon"></i>
                              Bulk SMS
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/share"
                            >
                              <i className="fa-solid fa-share btnicon"></i>
                              Share
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    to="/change-password"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-lock-open"></i>
                    <span className="ms-1 d-none d-sm-inline">Password</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="container">
              <div className="row mt-5">
                <h1>RESTAURANT MANAGEMENT</h1>

                <div className="ms-3 bs">
                  {/* 1st row  */}
                  <div className="row my-5 mx-4">
                    <div className="col-md-6 text-start mt-2">
                      <h4>RESTAURANT MANAGEMENT</h4>
                    </div>
                    <div className="col-md-6 text-end mt-2">
                      <Link to="/resturant">
                        <button className="btn btn-primary">
                          Back to list
                        </button>
                      </Link>
                    </div>
                    <hr
                      style={{ padding: "1px" }}
                      className="mt-4 text-muted"
                    ></hr>

                    {/* form start here  */}
                    <form className="needs-validation" novalidate>
                      <div className="col-12">
                        <label for="validationCustom01" className="form-label">
                          Restaurant Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          placeholder="Restaurant Name here..."
                          required
                        />
                        
                        <hr
                          style={{ padding: "1px" }}
                          className="mt-4 text-muted"
                        ></hr>

                        <p className="boldtext">Owner information</p>

                        <label for="validationCustom02" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          placeholder="Owner Name here..."
                          required
                        />

                        <label
                          for="validationCustom03"
                          className="form-label mt-3"
                        >
                          Owner Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="validationCustom03"
                          placeholder="Owner Email here..."
                          required
                        />

                        <label
                          for="validationCustom04"
                          className="form-label mt-3"
                        >
                          Owner Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom04"
                          placeholder="Owner Address here..."
                          required
                        />

                        <label
                          for="validationCustom05"
                          className="form-label mt-3"
                        >
                          Owner Phone
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="validationCustom05"
                          placeholder="Owner Phone here..."
                          required
                        />

                        <p className="boldtext mt-3">
                          Restaurant Configurations
                        </p>

                        <div className="row">
                          <div className="col-md-6">
                            <label
                              for="validationCustom06"
                              className="form-label"
                            >
                              Restaurant Domain
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom06"
                              placeholder="Restaurant Domain here..."
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              for="validationCustom07"
                              className="form-label"
                            >
                              Facebook Client ID
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom07"
                              placeholder="149191290511851"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom08"
                              className="form-label"
                            >
                              Primary Color
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom08"
                              placeholder="#ed1c24"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom09"
                              className="form-label"
                            >
                              Facebook Client Secret
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom09"
                              placeholder="b462f5140b8899e7e30f7088507b5d6e"
                              required
                            />
                          </div>

                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom10"
                              className="form-label"
                            >
                              Secondary Color
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom10"
                              placeholder="#ed1c24"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom11"
                              className="form-label"
                            >
                              Facebook Redirect
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom11"
                              placeholder="https://demo.clicknfeed.co.uk/login/facebook/redirect"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom12"
                              className="form-label"
                            >
                              App Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom12"
                              placeholder="App Name"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom13"
                              className="form-label"
                            >
                              Onesignal App ID
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom13"
                              placeholder="7bdddb53-1951-48e5-9eea-a3a742ee34f5"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom14"
                              className="form-label"
                            >
                              Deleivery Intervals in Mins
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom14"
                              placeholder="30"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom15"
                              className="form-label"
                            >
                              Onesignal Rest API Key
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom15"
                              placeholder="MjgwMzZiNzktZmE4Yy00NTAxLWIzYWEtYjljNjlkZWZlNzNh"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom16"
                              className="form-label"
                            >
                              Enable Stripe Connect
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom16"
                              placeholder="1"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom17"
                              className="form-label"
                            >
                              Optomany Enabled
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom17"
                              placeholder="Optomany Enabled"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom18"
                              className="form-label"
                            >
                              Enable Stripe
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom18"
                              placeholder="1"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom19"
                              className="form-label"
                            >
                              Optomany Client ID
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom19"
                              placeholder="optomany_test_integrations"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom20"
                              className="form-label"
                            >
                              Stripe Key
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom20"
                              placeholder="pk_live_51KSou6DrZLAAclh0SJwdqtHiZEwuN6hHE5sZakppRuylPfiJPnAfaD5ENyuzS0GvjodOt0Zwb6mW1TfeHUxluGt300WwhoY3Dp"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom21"
                              className="form-label"
                            >
                              Optomany Client Secret
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom21"
                              placeholder="t*8s=AaNQMPQYGcJpXaU3mn-u7t=vS3cek7hh2LCbQDcj2BLgngH*7jv0$Eh7bjI"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom22"
                              className="form-label"
                            >
                              Stripe Secret
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom22"
                              placeholder="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"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom23"
                              className="form-label"
                            >
                              Optomany Terminal ID
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom23"
                              placeholder="eb4528f5-4304-474b-be8a-99997d9036d5"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom24"
                              className="form-label"
                            >
                              Google Maps API Key
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom24"
                              placeholder="AIzaSyAKwIV-6y31LwzBieBhJqAztrZL9C76T7Y"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom25"
                              className="form-label"
                            >
                              Optomany Test Mode
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom25"
                              placeholder="1"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom26"
                              className="form-label"
                            >
                              Google Analytics
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom26"
                              placeholder="297699884"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom27"
                              className="form-label"
                            >
                              Google Client ID
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom27"
                              placeholder="308457639432-6vp4qfabdbusdv2hep3etcc5dobvra7j.apps.googleusercontent.com"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom28"
                              className="form-label"
                            >
                              Google Client Secret
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom28"
                              placeholder="0mkZQNb7833xqrMpEVpfLZN3"
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              for="validationCustom29"
                              className="form-label"
                            >
                              Google Redirect
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom29"
                              placeholder="https://demo.clicknfeed.co.uk/login/google/redirect"
                              required
                            />
                          </div>
                          <div class="col-12 text-end mt-3">
                            <button class="btn btn-primary" type="submit">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddResturant;
