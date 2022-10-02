import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function MyProfile() {
  const getstatus = localStorage.getItem("status");

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-lg-3 col-xl-2 px-sm-2 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">
                {getstatus === "true" &&
                JSON.parse(localStorage.getItem("currentuser"))[0].role ===
                  1 ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ) : JSON.parse(localStorage.getItem("currentuser"))[0].role ===
                  2 ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ) : (
                  <>Owner</>
                )}
              </h5>
              <ul
                className="nav nav-tabs mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {getstatus === "true" &&
                JSON.parse(localStorage.getItem("currentuser"))[0].role ===
                  1 ? (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/home"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-house"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Dashboard
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/liveorders"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          {" "}
                          Live Orders
                        </span>
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
                        <span className="ms-1 d-none d-sm-inline">
                          {" "}
                          Customers
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/menu"
                        className="nav-link align-middle sidebartag"
                      >
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
                        <span className="ms-1 d-none d-sm-inline">
                          {" "}
                          Setting
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <div className="accordion" id="accordionExample">
                        <div
                          className="accordion-item"
                          style={{ border: "none" }}
                        >
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
                        <span className="ms-1 d-none d-sm-inline">
                          Password
                        </span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/home"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-house"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Dashboard
                        </span>
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
                        to="/resturant"
                        className="nav-link align-middle sidebartag"
                      >
                        <i class="fas fa-utensils"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          {" "}
                          Resturants
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/pages"
                        className="nav-link align-middle sidebartag"
                      >
                        <i class="fas fa-file"></i>
                        <span className="ms-1 d-none d-sm-inline"> Pages</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/report"
                        className="nav-link align-middle sidebartag"
                      >
                        <i class="fas fa-chart-bar"></i>
                        <span className="ms-1 d-none d-sm-inline"> Report</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/change-password"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-lock-open"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Password
                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="container mt-5">
              <div className="row">
                <div className="col">
                  <h1>USER PROFILE</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8 bs mb-5">
                  <div className="row p-4">
                    <div className="col-6">
                      <h5 className="mt-1">USER PROFILE</h5>
                    </div>
                    <div className="col-6 text-end">
                      <Link to="/home"></Link>
                      <button type="button" class="btn btn-primary">
                        Cart
                      </button>
                    </div>
                    <hr style={{ padding: "0" }} className="mt-3"></hr>
                  </div>

                  <form className="row g-3 needs-validation" novalidate>
                    <div className="col-12">
                      <label for="validationCustom01" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        placeholder="CNF Admin"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label for="validationCustom02" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="validationCustom02"
                        placeholder="admin@clicknfeed.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label
                        for="validationCustomUsername"
                        className="form-label"
                      >
                        Phone
                      </label>
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          +44
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          id="validationCustomUsername"
                          aria-describedby="inputGroupPrepend"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 text-end">
                      <button
                        className="btn btn-primary mt-3 me-4 mb-5"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 bs p-4">
                <h5 className="mt-1">INFO</h5>
                    <hr></hr>
                    <b>Info</b>
                    <br></br>
                    <b>Total Orders : 0</b>
                    <hr></hr>
                    <b>Last Added address</b>
                    <p>395, 395 Street 37, PWD Housing Society Sector C PWD Society, Islamabad, Islamabad Capital Territory, Pakistan</p>
                    <hr></hr>
                    <b className="fs-5">Referral Info</b>
                    <br></br>
                    <b className="fs-6">Total Earned: $0</b>
                    <br></br>
                    <b className="fs-6">Total Spent: $0</b>
                    <br></br>
                    <b className="fs-6">Pending credit: $0</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
