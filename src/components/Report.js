import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function Report() {
  const [orderReport, setorderReport] = useState([])
  const getstatus = localStorage.getItem("status");

  var orderData = [
    {
      name: "ORDERS",
      value: 1768,
    },
    {
      name: "PLATFORM",
      value: 1083.8,
    },
    {
      name: "PROCESSOR",
      value: 1137.02,
    },
    {
      name: "NET",
      value: 38974.79,
    },
    {
      name: "TOTAL",
      value: 41195.61,
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(
            "https://apinodejs.creativeparkingsolutions.com/api/superadmin/orderreport"
          )
        ).data;
        setorderReport(data.data);
      } catch (error) {
        console.log(error, "err");
      }
    }
    fetchData();
  
  }, [])
  
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row flex-nowrap">
        <div className="col-auto col-lg-3 col-xl-2 px-sm-2 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">
                {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 1 ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ) : JSON.parse(localStorage.getItem("currentuser"))[0].role === 2 ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ): (<>
                Owner
                </>)}
              </h5>
              <ul
                className="nav nav-tabs mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 1 ? (<>
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
                </>):(<>
                  <li className="nav-item">
                  <Link to="/home" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-house"></i>
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
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
                    <span className="ms-1 d-none d-sm-inline"> Resturants</span>
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
                    <span className="ms-1 d-none d-sm-inline">Password</span>
                  </Link>
                </li>

                </>)}
                
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="container mt-5">
              <div className="row">
                <div className="col">
                  <h1>ORDERS REPORT</h1>
                </div>
              </div>

              <div className="container bs">
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Filter by Restaurant
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>-- Select an option --</option>
                      <option value="1">Pontus Fish and Pizza</option>
                      <option value="2">Golden Fry Sedgley</option>
                      <option value="3">bkitchen</option>
                    </select>
                  </div>
                  <div className="col-md-4 mt-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Payment Method
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>-- Select an option --</option>
                      <option value="1">All</option>
                      <option value="2">COD</option>
                      <option value="3">STRIPE</option>
                    </select>
                  </div>
                  <div className="col-md-4 mt-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Date Range
                    </label>
                    <div className="row g-0">
                      <div className="col-5">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                        />
                      </div>
                      <div className="col-2 text-center mt-2">
                        <span>To</span>
                      </div>
                      <div className="col-5">
                        {" "}
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Server"
                          aria-label="Server"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col mt-3 mb-5">
                      <button
                        style={{ backgroundColor: "#4650DD", color: "white" }}
                        type="button"
                        className="btn"
                      >
                        Export
                      </button>
                      <button
                        style={{ backgroundColor: "#4650DD", color: "white" }}
                        type="button"
                        className="btn ms-2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {orderData.map((data) => {
                  return (
                    <div className="col">
                      <Link
                        to="/"
                        style={{ textDecoration: "none" }}
                        className="cardslink"
                      >
                        <div className="col bs responsiveness mt-4">
                          <div className="text-center">
                            <h5 style={{ paddingTop: "10px" }}>{data.name}</h5>
                            <hr
                              style={{ padding: "0px" }}
                              className="text-muted"
                            ></hr>
                            <h4
                              style={{ paddingBottom: "15px" }}
                              className="boldtext"
                            >
                              ${data.value}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div className="container bs mb-5">
                <div className="row">
                  <div className="col mt-5">
                    <h6>ORDERS REPORT</h6>
                  </div>
                  <div className="col d-flex justify-content-end text-end mt-5">
                    <h3
                      style={{
                        backgroundColor: "#4650DD",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      £41,195.61
                    </h3>
                  </div>
                  <hr style={{ padding: "0" }}></hr>
                </div>

                <div className="row">
                  <div className="table-responsive">
                  <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        #
                      </th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Creation Date</th>
                      <th scope="col">Method</th>
                      <th scope="col">Status</th>
                      <th scope="col">PLATFORM FEE</th>
                      <th scope="col">PROCESSOR FEE</th>
                      <th scope="col">NET</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>

                  {orderReport.map((report) => {
                    return (
                      <tbody>
                        <tr>
                          <th scope="row">{report.cart_Id}</th>
                          <td>{report.name}</td>
                          <td>{report.DateTime}</td>
                          <td>stripe</td>
                          <td>
                          {report.Orderstatus === "1" ? (
                                  <>Pending</>
                                ) : report.Orderstatus === "2" ? (
                                  <>In Process</>
                                ) : report.Orderstatus === "3" ? (
                                  <>Completed</>
                                ) : (
                                  <>Rejected</>
                                )}
                          </td>
                          <td>£ 0.25</td>
                          <td>£ 9</td>
                          <td>£{report.total}</td>
                          <td>£{report.total}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                  </div>
                </div>
                

                <div className="row">
                  <div className="col d-flex justify-content-end mt-4 mb-4">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#">
                            Previous
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
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

export default Report;
