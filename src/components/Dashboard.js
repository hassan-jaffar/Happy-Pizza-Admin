import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import Navbar from "./Navbar";

function Dashboard() {
  const getstatus = localStorage.getItem("status");
  const [orders, setOrders] = useState();
  const [customer, setcustomer] = useState();
  const [item, setitem] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getorderlength")
        ).data;
        setOrders(data.data);
      } catch (error) {
        console.log(error, "err");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getcustomerlength")
        ).data;
        setcustomer(data.data);
      } catch (error) {
        console.log(error, "err");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getitemslength")
        ).data;
        console.log(data.data);
        setitem(data.data);
      } catch (error) {
        console.log(error, "err");
      }
    }
    fetchData();
  }, []);



  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-lg-3 col-xl-2 px-sm-2 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">
                {getstatus === "true" ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ) : (
                  <>OWNER</>
                )}
              </h5>
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
                    <div className="accordion-item" style={{border: 'none'}}>
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed boldtext align-middle "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          style={{padding: '1rem'}}
                        >
                          <i className="fa-solid fa-arrows-to-dot"></i>
                          <span className="ms-1">
                            Marketing
                          </span>
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
            <div className="row gx-0 responsiveness">
              <div className="col-md-12">
                <h2 className="mt-5 mb-2 mx-3 responsiveness">DASHBOARD</h2>
                
                <div className="openh1 my-5 mx-3 px-5 py-4 responsiveness">
                  <h6>
                    <i className="fa-solid fa-circle-check me-3 checkiconclr"></i>
                  </h6>
                  <h1 className="boldtext">Your Restaurant is Open!</h1>
                  <button
                    type="button"
                    className="btn btn-light mlauto editpencilbtn bs"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-pen peniconclr"></i>
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title boldtext"
                            id="exampleModalLabel"
                          >
                            Change Open/Close
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample"
                          >
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseOne"
                                >
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault1"
                                    >
                                      Online (as usual)
                                    </label>
                                  </div>
                                </button>
                              </h2>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="flush-headingTwo"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseTwo"
                                >
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault3"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault3"
                                    >
                                      Offline For The Whole Day
                                    </label>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <div class="mb-3">
                                    <textarea
                                      class="form-control"
                                      id="exampleFormControlTextarea1"
                                      rows="3"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="flush-headingThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseThree"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseThree"
                                >
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault2"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault2"
                                    >
                                      Offline Until
                                    </label>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <div class="mb-3">
                                    <textarea
                                      class="form-control"
                                      id="exampleFormControlTextarea1"
                                      rows="3"
                                    ></textarea>
                                  </div>
                                  <label className="mb-1 mt-2 boldtext">DateRange</label>
                                  <div class="input-group mb-3">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      aria-label=""
                                    />
                                    <span class="input-group-text">To</span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      aria-label=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="btn btn-info mt-2 d-block w-100">
                            Save
                          </button>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center cardsrow responsiveness">
            <Link to="/" style={{ textDecoration: 'none' }} className="cardslink">
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext cardtitleclr">Sales Volume</h5>
                <h4 className="boldtext cardinfoclr">$0.00</h4>
                <h6>(days)</h6>
              </div>
              </Link>
              <Link to="/orders" style={{ textDecoration: 'none'}} className="cardslink">
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext cardtitleclr">Orders</h5>
                <h4 className="boldtext cardinfoclr">{orders}</h4>
                <h6>Today</h6>
              </div>
              </Link>
              <Link to="/menu" style={{ textDecoration: 'none'}} className="cardslink">
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext cardtitleclr">No of Items</h5>
                <h4 className="boldtext cardinfoclr">{item}</h4>
                <h6>items</h6>
              </div>
              </Link>
              <Link to="/customers" style={{ textDecoration: 'none'}} className="cardslink">
              <div className="col-md-2 dashboardcards responsiveness">
                <h5 className="boldtext cardtitleclr">Customers</h5>
                <h4 className="boldtext cardinfoclr">{customer}</h4>
                <h6>Customers</h6>
              </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
