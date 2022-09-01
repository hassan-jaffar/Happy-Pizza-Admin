import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Orders.css";
import OrdersTable from "./OrdersTable";

function Orders() {
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
                  <Link
                    to="/LiveOrders"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="ms-1 d-none d-sm-inline">Live Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Orders" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline"> Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Customers" className="nav-link align-middle sidebartag">
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
            <OrdersTable/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
