import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { CKEditor } from "ckeditor4-react";

function AddPage() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState(true);

  async function add() {
    const details = {
      title,
      description,
      status
    }
    alert(description)

    // try {

      // setloading(true)
      // const result = await axios.post("http://localhost:5000/api/superadmin/addpage",details).data;
      // console.log(result)
      // toast.success("Registration Successfull")
      // setloading(true)
      // setInterval(() => {
      //   window.location.href = "/pages"
      // }, 2000);

      // settitle('');
      // setdescription('');



  // } catch (error) {
  //     console.log(error);
      // toast.warn("Something went wrong!")
      // setloading(true)
  // }
  }
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
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <h1>PAGES</h1>
                  </div>

                  <div className="container bs mb-5">
                    <div className="row">
                      <div className="col-6 mt-5">
                        <h6>PAGES INFORMATION</h6>
                      </div>
                      <div className="col-6 text-end mt-5">
                        <Link to='/pages'><button type="button" class="btn btn-primary">
                          BACK TO PAGES
                        </button></Link>
                      </div>
                      <hr style={{ padding: "0px" }} className="mt-4"></hr>
                    </div>

                    <div className="row">
                      <div className="col">
                        <input
                          style={{ padding: "20px" }}
                          type="text"
                          class="form-control"
                          placeholder="Title"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={title}
                          onChange={(e)=>{settitle(e.target.value)}}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mt-3 mb-5">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label text-muted"
                        >
                          Content
                        </label>
                        <CKEditor
                        
                        onChange={(e)=>{ }} />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col text-end mb-4">
                        <button style={{ backgroundColor: '#4650DD', color: 'white' }} type="button" class="btn" onClick={add}>Save</button>
                        </div>
                    </div>
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

export default AddPage;
