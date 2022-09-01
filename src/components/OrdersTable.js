import React from "react";
import "./Orders.css";

function OrdersTable() {
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
    </>
  );
}

export default OrdersTable;