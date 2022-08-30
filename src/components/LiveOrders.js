import React from "react";
import { Link } from "react-router-dom";
import './LiveOrders.css'

function LiveOrders() {
    return (
        <>
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
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                        <span className="ms-1 d-none d-sm-inline">
                                            {" "}
                                            Live Orders
                                        </span>
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
                        <h1 style={{marginTop: '30px', marginBottom: '30px', fontWeight: 'normal'}}>LIVE ORDERS</h1>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card cardattributes">
                                    <div className="card-header titleheader">
                                        <h4 className="card-title ">New Orders</h4>
                                    </div>
                                    <div className="card-body bordersofcard">

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardattributes">
                                    <div className="card-header titleheaderaccepted">
                                        <h4 className="card-title">Accepted/Cooking</h4>
                                    </div>
                                    <div className="card-body bordersofcard">
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item accitem">
                                                <h2 class="accordion-header cursor" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                                    <div className="row justify-content-center align-items-center">
                                                        <div className="col-md-2 imghead">
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436" width={28} height={28} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketext"># -001</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">unpaid</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">Delivery</h6>
                                                        </div>
                                                    </div>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <h2 className="emailformat">kerryblackhorse@hotmail.co.uk</h2>
                                                        <h2 className="addresstime"><span></span>House No: 1, Cross Place, DY3 1PE, Sedgley</h2>
                                                        <h2 className="addresstime">Time slot: 8:00 PM - 8:30 PM</h2>
                                                        <div className="row btnrow">
                                                            <div className="col-md-6">
                                                                <button type="button" className="btn actionbtns">Accept</button>
                                                            </div>
                                                            <div className="col-md-6">

                                                                <button type="button" className="btn actionbtns">Reject</button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardattributes">
                                    <div className="card-header titleheadercompleted">
                                        <h4 className="card-title ">Completed</h4>
                                    </div>
                                    <div className="card-body bordersofcard">
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item accitem">
                                                <h2 class="accordion-header cursor" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">

                                                    <div className="row justify-content-center align-items-center">
                                                        <div className="col-md-2 imghead">
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436" width={28} height={28} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketext"># -001</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">unpaid</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">Collect</h6>
                                                        </div>
                                                    </div>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <h2 className="emailformat">Shoaib Jamil</h2>
                                                        <h2 className="addresstime">Time slot: 8:00 PM - 8:30 PM</h2>
                                                        <div style={{textAlign: "center"}}>
                                                        <button type="button" className="btn actionbtns">View</button>

                                                        </div>
                                                    </div>
                                                </div>
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

export default LiveOrders;
