import React from "react";

function CustomersTable() {
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
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>
                  26 Sep 2021 05:50 PM
                  </td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td><button className="btn btn-primary">:</button></td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>
                  26 Sep 2021 05:50 PM
                  </td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td><button className="btn btn-primary">:</button></td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>
                  26 Sep 2021 05:50 PM
                  </td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td><button className="btn btn-primary">:</button></td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>
                  26 Sep 2021 05:50 PM
                  </td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td><button className="btn btn-primary">:</button></td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>
                  26 Sep 2021 05:50 PM
                  </td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td><button className="btn btn-primary">:</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomersTable;
