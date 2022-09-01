import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Orders.css";

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
                  <Link to="/" className="nav-link align-middle sidebartag">
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
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h1 className="my-5 mx-4 responsiveness text-start">ORDERS</h1>
                <div
                  className="accordion my-2 mx-4 bs responsiveness"
                  id="accordionExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button boldtext"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        FILTER
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-start my-3">
                        <label for="daterange" className="me-1 boldtext">
                          Date Range
                        </label>
                        <input
                          id="daterange"
                          className="me-1 py-1"
                          placeholder="Start Date"
                        />
                        <input
                          id="daterange"
                          className="me-1 py-1"
                          placeholder="End Date"
                        />
                        <label for="customerfilter" className="boldtext ms-2">
                          Filter by Customer:
                        </label>
                        <input
                          id="customerfilter"
                          className="mx-1 py-1"
                          placeholder="Select an option"
                        />
                        <button className="btn btn-primary mx-1">Export</button>
                        <button className="btn btn-primary mx-1">Search</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table my-5 mx-4 bs">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Address/Phone</th>
                        <th scope="col">Created</th>
                        <th scope="col">Method</th>
                        <th scope="col">Last Status</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          1017-1661245479-002
                        </th>
                        <td>House No: 1, Cross Place, DY3 1PE, Sedgley</td>
                        <td>
                          13 August 2022
                          <br />
                          7:26 PM
                        </td>
                        <td>Delivery</td>
                        <td>Accept</td>
                        <td>cod(unpaid)</td>
                        <td>$17.93</td>
                      </tr>
                      <tr>
                        <th scope="row">1017-1661245479-002</th>
                        <td>House No: 1, Cross Place, DY3 1PE, Sedgley</td>
                        <td>
                          13 August 2022
                          <br />
                          7:26 PM
                        </td>
                        <td>Delivery</td>
                        <td>Accept</td>
                        <td>cod(unpaid)</td>
                        <td>$17.93</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          1017-1661245479-002
                        </th>
                        <td>House No: 1, Cross Place, DY3 1PE, Sedgley</td>
                        <td>
                          13 August 2022
                          <br />
                          7:26 PM
                        </td>
                        <td>Delivery</td>
                        <td>Accept</td>
                        <td>cod(unpaid)</td>
                        <td>$17.93</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          1017-1661245479-002
                        </th>
                        <td>House No: 1, Cross Place, DY3 1PE, Sedgley</td>
                        <td>
                          13 August 2022
                          <br />
                          7:26 PM
                        </td>
                        <td>Delivery</td>
                        <td>Accept</td>
                        <td>cod(unpaid)</td>
                        <td>$17.93</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          1017-1661245479-002
                        </th>
                        <td>House No: 1, Cross Place, DY3 1PE, Sedgley</td>
                        <td>
                          13 August 2022
                          <br />
                          7:26 PM
                        </td>
                        <td>Delivery</td>
                        <td>Accept</td>
                        <td>cod(unpaid)</td>
                        <td>$17.93</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
