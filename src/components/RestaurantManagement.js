import React from "react";

function RestaurantManagement() {
  return (
    <>
      <h6 className="px-1">RESTAURANT MANAGEMENT</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-6 px-3">
          <label for="rstname" className="mt-3">
            Restaurant Name:
          </label>
          <input
            id="rstname"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Happy Pizza"
          />
          <label for="rstdescription" className="mt-3">
            Restaurant Description:
          </label>
          <input
            id="rstdescription"
            className="form-control my-2 py-2"
            type="text"
            placeholder="yummy, taco, fast food, wraps"
          />
          <label for="rstaddress" className="mt-3">
            Restaurant Address:
          </label>
          <input
            id="rstaddress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="lahore, pakistan"
          />
          <label for="rstphone" className="mt-3">
            Restaurant Phone:
          </label>
          <input
            id="rstphone"
            className="form-control my-2 py-2"
            type="text"
            placeholder="xxxx-xxxxxxx"
          />
          <label for="servicecharges" className="mt-3">
            Service Charges:
          </label>
          <input
            id="servicecharges"
            className="form-control my-2 py-2"
            type="number"
            placeholder="0.00"
          />
          <div className="form-check form-switch text-start my-4">
            <div className="row">
              <label className="form-check-label" for="cod">
                Cash on Delivery
              </label>
              <input className="form-check-input" type="checkbox" id="cod" />
            </div>
          </div>
          <div className="form-check form-switch text-start my-4">
            <div className="row">
              <label className="form-check-label" for="pickup">
                Pickup
              </label>
              <input className="form-check-input" type="checkbox" id="pickup" />
            </div>
          </div>
          <div className="form-check form-switch text-start my-4">
            <div className="row">
              <label className="form-check-label" for="delivery">
                Delivery
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="delivery"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 px-3">
          <label for="minimumorder" className="mt-3">
            Minimum Order:
          </label>
          <input
            id="minimumorder"
            className="form-control my-2 py-2"
            type="number"
            placeholder="10"
          />
          <label for="avgtime" className="mt-3">
            Average Order Prepare Time in minutes:
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1">0</option>
            <option value="2">5</option>
            <option value="3">10</option>
            <option value="4">15</option>
            <option value="5">20</option>
            <option selected>25</option>
            <option value="6">30</option>
            <option value="7">35</option>
            <option value="8">40</option>
            <option value="9">45</option>
            <option value="10">50</option>
            <option value="11">60</option>
            <option value="12">90</option>
            <option value="13">120</option>
          </select>
          <label for="timeslots" className="mt-3">
            Time Slots seperated in minutes:
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1">0</option>
            <option value="2">5</option>
            <option value="3">10</option>
            <option value="4">15</option>
            <option value="5">20</option>
            <option value="6">25</option>
            <option selected>30</option>
            <option value="7">35</option>
            <option value="8">40</option>
            <option value="9">45</option>
            <option value="10">50</option>
            <option value="11">60</option>
            <option value="12">90</option>
            <option value="13">120</option>
          </select>
          <div className="my-3">
            <label for="formFile" className="form-label">
              Restaurant Image:
            </label>
            <input className="form-control" type="file" id="formFile" />
            <img
              src="http://restaurant.clicknfeed.co.uk/uploads/restorants/cfa8a36f-4267-4e67-8369-edfea654b59b_large.jpg"
              className="settingimg"
            />
          </div>
          <div className="my-3">
            <label for="formFile2" className="form-label">
              Restaurant Cover Image:
            </label>
            <input className="form-control" type="file" id="formFile2" />
          </div>
          <div className="my-3">
            <label for="formFile3" className="form-label">
              Restaurant Receipt Image:
            </label>
            <input className="form-control" type="file" id="formFile3" />
            <img
              src="http://restaurant.clicknfeed.co.uk/uploads/restorants/cfa8a36f-4267-4e67-8369-edfea654b59b_large.jpg"
              className="settingimg"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 px-3">
          <h5 className="boldtext">Owner Information</h5>
          <label for="ownname" className="mt-3">
            Own Name:
          </label>
          <input
            id="ownname"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Owner"
          />
          <label for="ownemail" className="mt-3">
            Owner Email :
          </label>
          <input
            id="ownemail"
            className="form-control my-2 py-2"
            type="text"
            placeholder="dakfal@dsfkal"
          />
          <label for="ownphone" className="mt-3">
            Owner Phone:
          </label>
          <input
            id="ownphone"
            className="form-control my-2 py-2"
            type="text"
            placeholder="xxxx-xxxxxxx"
          />
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2 w-25">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantManagement;
