import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";
import { Link } from "react-router-dom";

function ResturantsTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(
            "https://apinodejs.creativeparkingsolutions.com/api/admin/getallorders"
          )
        ).data;
        setOrders(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <h1 className="my-5 mx-4 responsiveness text-start">RESTURANTS</h1>
          <div
            className="accordion my-2 mx-4 responsiveness"
            id="accordionExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
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
                  <div class="row text-start">
                    <div class="col-md-4">
                      <label for="daterange" className="me-1 my-1">
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
                    <div class="col-md-4">
                      <label for="daterange" className="me-1 my-1">
                        Show
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>-- Select an option --</option>
                        <option value="1">All</option>
                        <option value="2">Pending</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      {" "}
                      <div style={{ marginTop: "29px" }}>
                        <button className="btn btn-primary my-1 mx-1">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ms-4 bs">
          {/* 1st row  */}
          <div className="row my-5 mx-4">
            <div className="col-md-6 text-start mt-5">
              <h4>RESTURANTS</h4>
            </div>
            <div className="col-md-6 text-end mt-5">
              <button className="btn btn-primary">Add Resturant</button>
            </div>
            <hr style={{ padding: "2px" }} className="mt-4 text-muted"></hr>
          </div>

          {/* 2nd row for data  */}

          <div className="row ms-3">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Owner</th>
                        <th scope="col">email</th>
                        <th scope="col">Creation Date</th>
                        <th scope="col">Active</th>
                        <th scope="col">Live</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders &&
                        orders.map((order) => {
                          return (
                            <>
                              <tr>
                                <th scope="row">{order.ID}</th>

                                <td>
                                  <Link
                                    to={`/order-detail/${order.cart_Id}/${order.customer_Id}`}
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                  >
                                    {order.house},Flat:{order.flat},
                                    {order.street},{order.postcode},{order.town}
                                  </Link>
                                </td>
                                <td>{order.DateTime}</td>
                                <td>collection</td>
                                <td>
                                  {order.Orderstatus === "1" ? (
                                    <>Pending</>
                                  ) : order.Orderstatus === "2" ? (
                                    <>In Process</>
                                  ) : order.Orderstatus === "3" ? (
                                    <>Completed</>
                                  ) : (
                                    <>Rejected</>
                                  )}
                                </td>
                                <td>
                                  <span class="badge bg-info primary">
                                    cod(unpaid)
                                  </span>
                                </td>
                                <td>
                                  <span class="badge bg-danger primary">
                                    ${order.total}
                                  </span>
                                </td>
                                <td>
                                  <div className="dropdown">
                                    <button
                                      type="button"
                                      className="btn btn-outline-primary deactivatebtn blueclrname"
                                      id="dropdownMenuButton"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="true"
                                      // data-bs-container="body"
                                      // data-bs-placement="bottom"
                                      // data-bs-content="Deactivate"
                                    >
                                      <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    <ul
                                      class="dropdown-menu"
                                      aria-labelledby="dropdownMenuButton"
                                    >
                                      <li className="dropdown-item">Edit</li>
                                      <li className="dropdown-item">
                                        Login as
                                      </li>
                                      <li className="dropdown-item">
                                        Deactivate
                                      </li>
                                      <li className="dropdown-item">
                                        Activate
                                      </li>
                                      <li class="dropdown-item">
                                        <i className="fa-solid fa-ban btnicon"></i>
                                        Delete
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </>
                          );
                        })}

                      {/* <tr>
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
        </tr> */}
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

export default ResturantsTable;
