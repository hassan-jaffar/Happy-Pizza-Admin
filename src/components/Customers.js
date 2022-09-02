import React from "react";
import { Link } from "react-router-dom";
import CustomersTable from "./CustomersTable";
import Navbar from "./Navbar";

function Customers() {
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
                  <Link to="/" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-house"></i>
                    <span className="ms-1 d-none d-sm-inline"> Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/liveorders" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      Live Orders
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline"> Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/customers" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-user"></i>
                    <span className="ms-1 d-none d-sm-inline"> Customers</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-book"></i>
                    <span className="ms-1 d-none d-sm-inline"> Menu...</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/setting" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-gear"></i>
                    <span className="ms-1 d-none d-sm-inline"> Setting...</span>
                  </Link>
                </li>
                <li className="nav-item">
                <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle boldtext align-middle sidebartag"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-arrows-to-dot"></i>
                      <span className="ms-1 d-none d-sm-inline"> Marketing...</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
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
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/change-password" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-lock-open"></i>
                    <span className="ms-1 d-none d-sm-inline">Password</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <CustomersTable/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;