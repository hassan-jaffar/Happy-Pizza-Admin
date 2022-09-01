import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <>
    <Navbar/>
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
                  <Link to="/LiveOrders" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      {" "}
                      Live Orders
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Orders" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline"> Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-user"></i>
                    <span className="ms-1 d-none d-sm-inline"> Customers</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-car"></i>
                    <span className="ms-1 d-none d-sm-inline"> Drivers...</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-star"></i>
                    <span className="ms-1 d-none d-sm-inline"> Ranks...</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-book"></i>
                    <span className="ms-1 d-none d-sm-inline"> Menu...</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-gear"></i>
                    <span className="ms-1 d-none d-sm-inline"> Setting...</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/addresses"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-arrows-to-dot"></i>
                    <span className="ms-1 d-none d-sm-inline">Marketing</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-lock-open"></i>
                    <span className="ms-1 d-none d-sm-inline">Password</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-12">
                <h2 className="mt-5 mb-2 mx-3 responsiveness">DASHBOARD</h2>
                <div className="openh1 my-5 mx-3 px-5 py-4 responsiveness">
                  <h1>
                    <i className="fa-solid fa-circle-check me-3"></i>
                  </h1>
                  <h1>Your Restaurant is Open!</h1>
                  <h1 className="mlauto">
                    <i className="fa-solid fa-pen"></i>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext">Sales Volume</h5>
                <h4 className="boldtext">$0.00</h4>
                <h6>(days)</h6>
              </div>
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext">Orders</h5>
                <h4 className="boldtext">0</h4>
                <h6>Today</h6>
              </div>
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext">No of Items</h5>
                <h4 className="boldtext">244</h4>
                <h6>items</h6>
              </div>
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext">Customers</h5>
                <h4 className="boldtext">46</h4>
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
