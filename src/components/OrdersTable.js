import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";
import { Link } from "react-router-dom";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getallorders")
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

                {orders &&
                  orders.map((order) => {
                    return (
                      <>
                        <tr>
                            <th scope="row">
                              <span class="badge text-bg-info info">
                                {order.ID}
                              </span>
                            </th>

                            <td>
                            <Link to={`/order-detail/${order.cart_Id}/${order.customer_Id}`} style={{ textDecoration: "none", color: "black" }}>

                              {order.house},Flat:{order.flat},{order.street},
                              {order.postcode},{order.town}
                              </Link>

                            </td>
                            <td>{order.DateTime}</td>
                            <td>
                              <span class="badge text-bg-primary primary">
                                collection
                              </span>
                            </td>
                            <td>
                              <span class="badge text-bg-info info">
                                {order.Orderstatus === "1" ? (
                                  <>Pending</>
                                ) : order.Orderstatus === "2" ? (
                                  <>In Process</>
                                ) : order.Orderstatus === "3" ? (
                                  <>Completed</>
                                ) : (
                                  <>Rejected</>
                                )}
                              </span>
                            </td>
                            <td>
                              <span class="badge text-bg-primary primary">
                                cod(unpaid)
                              </span>
                            </td>
                            <td>${order.total}</td>
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
    </>
  );
}

export default OrdersTable;
