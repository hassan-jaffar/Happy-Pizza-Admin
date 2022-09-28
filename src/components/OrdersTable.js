import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";
import { Link } from "react-router-dom";
import { DatePicker, Space  } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
const { RangePicker } = DatePicker;


function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [duplicateorders, setduplicateorders] = useState([])
  const [type, settype] = useState("-- Select an option --")
  const [fromdate , setfromdate] = useState();
  const [todate , settodate] = useState();



  async function searchByName(){
    // alert("you have searched")
  }

  function filterByDate(dates){
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(dates[1])

    alert(dates[0])
  }   


  function filterByName(e){
    settype(e);

    if (e!=="-- Select an option --") {
      
      // const temprooms = duplicateorders.filter(order=>order.ID===e)
      const temporders = duplicateorders.filter(order=>order.ID===parseInt(e))
      setOrders(temporders);
    }
    else{
      setOrders(orders)
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getallorders")
        ).data;
        setOrders(data.data);
        setduplicateorders(data.data)
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
                  <label for="daterange" className="me-1 my-1 boldtext">
                    Date Range
                  </label>
                  {/* <input
                    id="daterange"
                    className="me-1 my-1 py-1"
                    placeholder="Start Date"
                  /> */}
                  <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                  <label for="customerfilter" className="boldtext ms-2 my-1">
                    Filter by Customer:
                  </label>
                  {/* <input
                    id="customerfilter"
                    className="mx-1 py-1"
                    placeholder="Select an option"
                  /> */}
                  <select id="customerfilter" className="form-select mx-1 py-1" aria-label="Default select example" value={type} onChange={(e)=>{filterByName(e.target.value)}}>
  
  {orders.length > 0 && orders.map((order)=>{
    return <>
    <option value="-- Select an option --" selected>-- Select an option --</option>
      <option value={order.ID}>{order.ID}</option>  
    </>
  })}

  {/* <option value="2">Two</option>
  <option value="3">Three</option> */}
</select>
                  <button className="btn btn-primary my-1 mx-1">Export</button>
                  <button className="btn btn-primary my-1 mx-1" onClick={searchByName()}>Search</button>
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
