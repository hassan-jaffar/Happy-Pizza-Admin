import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
const { RangePicker } = DatePicker;


function OpenClose() {
  const [online, setonline] = useState(false);
  const [offline, setoffline] = useState(false);
  const [statement, setstatement] = useState("");
  const [to, setto] = useState("");
  const [from, setfrom] = useState("");
  const { id } = useParams();

  // const getstatus = localStorage.getItem("status");

  async function RangePickerDate(dates) {
    setfrom(moment(dates[0]).format("DD-MM-YYYY"));
    setto(moment(dates[1]).format("DD-MM-YYYY"));

  }

  async function open() {
    const details = {
      online,
      offline,
      statement,
      to,
      from,
      id
    }

    try {
      const data = await (
        await axios.post("https://apinodejs.creativeparkingsolutions.com/api/superadmin/openclose", details)
      ).data;
      toast.success("Data has been saved")

      setonline(false)
      setoffline(false)
      setstatement("");
      setto("");
      setfrom("");
    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong")
    }
  }

  return (
    <>
      <ToastContainer />
      <h6 className="px-1">OPEN/CLOSE</h6>
      <hr />
      <br />
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={(e) => { setonline(e.target.checked) }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Online (as usual)
                </label>
              </div>
            </button>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  onChange={(e) => { setoffline(e.target.checked) }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Offline For The Whole Day
                </label>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={statement}
                  onChange={(e) => { setstatement(e.target.value) }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onChange={(e) => { setoffline(e.target.checked) }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Offline Until
                </label>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={statement}
                  onChange={(e) => { setstatement(e.target.value) }}
                ></textarea>
              </div>
              <label className="mb-1 mt-2 boldtext">DateRange</label>
              <div className="input-group mb-3">
                <RangePicker
                  format="DD-MM-YYYY"
                  onChange={RangePickerDate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 text-center">
        <button className="btn btn-info py-2" onClick={open}>Save</button>
      </div>
    </>
  );
}

export default OpenClose;
