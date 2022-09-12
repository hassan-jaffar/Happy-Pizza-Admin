import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
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
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/liveorders"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="ms-1 d-none d-sm-inline"> Live Orders</span>
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
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed boldtext align-middle sidebartag"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i className="fa-solid fa-arrows-to-dot"></i>
                          <span className="ms-1 d-none d-sm-inline">
                            Marketing
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                            <li>
                              <Link
                                className="dropdown-item nav-link align-middle boldtext sidebartag"
                                to="/coupon"
                              >
                                <i className="fa-solid fa-tag btnicon"></i>
                                Discounts
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link align-middle boldtext sidebartag"
                                to="/bulksms"
                              >
                                <i className="fa-solid fa-message btnicon"></i>
                                Bulk SMS
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link align-middle boldtext sidebartag"
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
            <div className="row responsiveness">
              <div className="col-md-12">
                <h2 className="mt-5 mb-2 mx-3 responsiveness">DASHBOARD</h2>
                <div className="openh1 my-5 mx-3 px-5 py-4 responsiveness">
                  <h1>
                    <i className="fa-solid fa-circle-check me-3 checkiconclr"></i>
                  </h1>
                  <h1 className="boldtext">Your Restaurant is Open!</h1>
                  <h1 className="mlauto responsiveness">
                    <i className="fa-solid fa-pen peniconclr"></i>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center responsiveness">
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext cardtitleclr">Sales Volume</h5>
                <h4 className="boldtext cardinfoclr">$0.00</h4>
                <h6>(days)</h6>
              </div>
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext cardtitleclr">Orders</h5>
                <h4 className="boldtext cardinfoclr">0</h4>
                <h6>Today</h6>
              </div>
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext cardtitleclr">No of Items</h5>
                <h4 className="boldtext cardinfoclr">244</h4>
                <h6>items</h6>
              </div>
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext cardtitleclr">Customers</h5>
                <h4 className="boldtext cardinfoclr">46</h4>
                <h6>Customers</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
