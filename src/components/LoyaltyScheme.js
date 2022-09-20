import React,{useState,useEffect} from "react";
import axios from "axios";

function LoyaltyScheme() {
  const [status, setStatus] = useState(false)
  const [redeem, setredeem ] = useState("")
  const [points, setpoints] = useState("")
  const [currency_points, setCurrency_points] = useState("")
  return (
    <>
      <h6 className="px-1">LOYALTY SCHEME</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <p className="boldtext">Loyalty Scheme</p>
          <div className="form-check form-switch text-start my-2 w-50">
            <div className="row justify-content-between">
              <label className="form-check-label" for="loyalty">
                Loyalty Status
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="loyalty"
              />
            </div>
          </div>
          <label for="redeem" className="mt-3">
            Redeem At:
          </label>
          <input
            id="redeem"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="0"
          />
          <label for="currency" className="mt-3">
            Points Per Unit Currency:
          </label>
          <input
            id="currency"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="i.e 5points for 1$ spending"
          />
          <label for="perunit" className="mt-3">
            Per Unit Currency Points:
          </label>
          <input
            id="perunit"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="i.e give 1$ for every 10 points"
          />
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2 w-25">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoyaltyScheme;
