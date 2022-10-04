import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function RestaurantManagement() {
  const [name, setname] = useState("");
  const [updatename, setupdatename] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [charges, setcharges] = useState("");
  const [minimum_order, setminimum_order] = useState("");
  const [average_order, setaverage_order] = useState("");
  const [time, settime] = useState();
  const [owner_name, setowner_name] = useState("");
  const [updateowner_name, setupdateowner_name] = useState("");
  const [email, setemail] = useState("");
  const [updateowner_email, setupdateowner_email] = useState("");
  const [owner_phone, setowner_phone] = useState("");
  const [updateowner_phone, setupdateowner_phone] = useState("");
  const [updateowner_address, setupdateowner_address] = useState("")
  const {id} = useParams();
  const getstatus = localStorage.getItem("status");


  async function register() {
    const details = {
      id,
      description,
      address,
      phone,
      charges,
      minimum_order,
      average_order,
      time
    };

    try {
      const result = await axios.post(
        "http://localhost:5000/api/setting/resturantmanagement",
        details
      ).data;
      console.log(result);
      toast.success("Registration Successfull");
      // setInterval(() => {
      //   window.location.href = "/login"
      // }, 2000);


      setaddress("");
      setaverage_order("");
      setdescription("");
      setminimum_order("");
      settime("");
      setphone("");
      setcharges("");
    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong!");
      // setloading(true)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(`http://localhost:5000/api/superadmin/geteditresturant/${id}`)
        ).data;
        setupdatename(data.data['name']);
        setupdateowner_name(data.data['owner_name']);
        setupdateowner_email(data.data['owner_email']);
        setupdateowner_phone(data.data['owner_phone']);
        setupdateowner_address(data.data['owner_address']);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  return (
    <>
      <ToastContainer />
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
            value={updatename}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <label for="rstdescription" className="mt-3">
            Restaurant Description:
          </label>
          <input
            id="rstdescription"
            className="form-control my-2 py-2"
            type="text"
            placeholder="yummy, taco, fast food, wraps"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <label for="rstaddress" className="mt-3">
            Restaurant Address:
          </label>
          <input
            id="rstaddress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="lahore, pakistan"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
          <label for="rstphone" className="mt-3">
            Restaurant Phone:
          </label>
          <input
            id="rstphone"
            className="form-control my-2 py-2"
            type="text"
            placeholder="xxxx-xxxxxxx"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
          <label for="servicecharges" className="mt-3">
            Service Charges:
          </label>
          <input
            id="servicecharges"
            className="form-control my-2 py-2"
            type="number"
            placeholder="0.00"
            value={charges}
            onChange={(e) => {
              setcharges(e.target.value);
            }}
          />
          <div className="row mt-4">
            <div className="col-6">
              <label className="form-check-label" for="cod">
                Cash on Delivery
              </label>
            </div>
            <div className="col-6 form-check form-switch">
              <input className="form-check-input" type="checkbox" id="cod" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-check-label" for="pickup">
                Pickup
              </label>
            </div>
            <div className="col-6 form-check form-switch">
              <input className="form-check-input" type="checkbox" id="pickup" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-check-label" for="delivery">
                Delivery
              </label>
            </div>
            <div className="col-6 form-check form-switch">
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
            value={minimum_order}
            onChange={(e) => {
              setminimum_order(e.target.value);
            }}
          />
          <label for="avgtime" className="mt-3">
            Average Order Prepare Time in minutes:
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={average_order}
            onChange={(e) => {
              setaverage_order(e.target.value);
            }}
          >
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option selected value="25">
              25
            </option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="90">90</option>
            <option value="120">120</option>
          </select>
          <label for="timeslots" className="mt-3">
            Time Slots seperated in minutes:
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={time}
            onChange={(e) => {
              settime(e.target.value);
            }}
          >
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option selected value="30">
              30
            </option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="90"> 90</option>
            <option value="120">120</option>
          </select>
          <div className="my-3">
            <label for="formFile" className="form-label">
              Restaurant Image:
            </label>
            <input className="form-control" type="file" id="formFile" />
            <img
              src="http://restaurant.clicknfeed.co.uk/uploads/restorants/cfa8a36f-4267-4e67-8369-edfea654b59b_large.jpg"
              className="settingimg"
              alt=".."
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
              alt=".."
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
            value={updateowner_name}
          />
          <label for="ownemail" className="mt-3">
            Owner Email :
          </label>
          <input
            id="ownemail"
            className="form-control my-2 py-2"
            type="email"
            placeholder="dakfal@dsfkal"
            value={updateowner_email}
          />
          <label for="ownphone" className="mt-3">
            Owner Phone:
          </label>
          <input
            id="ownphone"
            className="form-control my-2 py-2"
            type="text"
            placeholder="xxxx-xxxxxxx"
            value={updateowner_phone}
          />
          <div className="container mt-5 text-center">
            {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 2 && (
            <button className="btn btn-info py-2" onClick={register}>
              Save
            </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantManagement;
