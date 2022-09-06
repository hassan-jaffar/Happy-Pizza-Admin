import React,{useState,useEffect} from "react";
import axios from "axios";

function CustomersTable() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    async function fetchData() {

      try {
        const data = await (await axios.get('http://localhost:5000/api/admin/getcustomers')).data
        setCustomers(data.data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <h1 className="my-5 mx-4 responsiveness text-start">CUSTOMERS</h1>

          <div className="table-responsive">
            <table className="table mt-2 mb-5 mx-4 bs">
              <thead>
                <tr>
                  <th scope="col">CLIENTS DATA</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Creation Date</th>
                  <th scope="col">Referral Balance</th>
                  <th scope="col">Rank</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {customers && customers.map((customer)=>{
                  return <>
                  <tr>
                  <th scope="row">{customer.name}</th>
                  <td>{customer.email}</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </td>
                </tr>
                  </>
                })}
                
                {/* <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>{" "}
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomersTable;
