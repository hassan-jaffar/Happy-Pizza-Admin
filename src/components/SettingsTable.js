import React from "react";
import { Link } from "react-router-dom";
import "./SettingsTable.css";

function SettingsTable() {
  return (
    <>
      <div className="row sharebox">
        <div className="col-md-12 mx-5 mt-5 py-5 px-5 responsiveness">
          <nav>
            <div
              className="nav nav-tabs settingsnavs justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link tabbutton active"
                id="restaurant-management-tab"
                data-bs-toggle="tab"
                data-bs-target="#restaurant-management"
                type="button"
                role="tab"
                aria-controls="restaurant-management"
                aria-selected="true"
              >
                Restaurant Management
              </button>
              <button
                className="nav-link tabbutton"
                id="apps-tab"
                data-bs-toggle="tab"
                data-bs-target="#apps"
                type="button"
                role="tab"
                aria-controls="apps"
                aria-selected="false"
              >
                Apps
              </button>
              <button
                className="nav-link tabbutton"
                id="delivery-area-tab"
                data-bs-toggle="tab"
                data-bs-target="#delivery-area"
                type="button"
                role="tab"
                aria-controls="delivery-area"
                aria-selected="false"
              >
                Delivery Area
              </button>
              <button
                className="nav-link tabbutton"
                id="working-hrs-tab"
                data-bs-toggle="tab"
                data-bs-target="#working-hrs"
                type="button"
                role="tab"
                aria-controls="working-hrs"
                aria-selected="false"
              >
                Working Hours
              </button>
              <button
                className="nav-link tabbutton"
                id="open-close-tab"
                data-bs-toggle="tab"
                data-bs-target="#open-close"
                type="button"
                role="tab"
                aria-controls="open-close"
                aria-selected="false"
              >
                Open/Close
              </button>
              <button
                className="nav-link tabbutton"
                id="menu-type-tab"
                data-bs-toggle="tab"
                data-bs-target="#menu-type"
                type="button"
                role="tab"
                aria-controls="menu-type"
                aria-selected="false"
              >
                Menu Type
              </button>
              <button
                className="nav-link tabbutton"
                id="loyalty-scheme-tab"
                data-bs-toggle="tab"
                data-bs-target="#loyalty-scheme"
                type="button"
                role="tab"
                aria-controls="loyalty-scheme"
                aria-selected="false"
              >
                Loyalty Scheme
              </button>
              <button
                className="nav-link tabbutton"
                id="referral-scheme-tab"
                data-bs-toggle="tab"
                data-bs-target="#referral-scheme"
                type="button"
                role="tab"
                aria-controls="referral-scheme"
                aria-selected="false"
              >
                Referral Scheme
              </button>
              <button
                className="nav-link tabbutton"
                id="config-tab"
                data-bs-toggle="tab"
                data-bs-target="#config"
                type="button"
                role="tab"
                aria-controls="config"
                aria-selected="false"
              >
                Config
              </button>
              <button
                className="nav-link tabbutton"
                id="content-tab"
                data-bs-toggle="tab"
                data-bs-target="#content"
                type="button"
                role="tab"
                aria-controls="content"
                aria-selected="false"
              >
                Content
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="row sharebox">
        <div className="col-lg-12 bs br mx-5 mb-5 py-5 px-5 responsiveness">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="restaurant-management"
              role="tabpanel"
              aria-labelledby="restaurant-management-tab"
            >
              <h6 className="px-1">Restaurant Management</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="apps"
              role="tabpanel"
              aria-labelledby="apps-tab"
            >
              <h6 className="px-1">Apps</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="delivery-area"
              role="tabpanel"
              aria-labelledby="delivery-area-tab"
            >
              <h6 className="px-1">Delivery Area</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="working-hrs"
              role="tabpanel"
              aria-labelledby="working-hrs-tab"
            >
              <h6 className="px-1">Working Hours</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="open-close"
              role="tabpanel"
              aria-labelledby="open-close-tab"
            >
              <h6 className="px-1">Open/Close</h6>
              <hr />
              <br />
              <div className="container d-block">
              <div class="form-check my-2 mx-5">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault4">
                  Online (as usual)
                </label>
              </div>
              <div class="form-check my-2 mx-5">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                />
                <label class="form-check-label" for="flexRadioDefault5">
                  Offline For The Whole Day
                </label>
              </div>
              <div class="form-check my-2 mx-5">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault6"
                />
                <label class="form-check-label" for="flexRadioDefault6">
                  Offline Until
                </label>
              </div>
              </div>
              <div className="container mt-5 text-center">
              <button className="btn btn-info px-4 py-2 w-100">Save</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="menu-type"
              role="tabpanel"
              aria-labelledby="menu-type-tab"
            >
              <h6 className="px-1">Menu Type</h6>
              <hr />
              <br />
              <div className="container d-flex">
              <div class="form-check my-2 me-5">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault0"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Uppercase
                </label>
              </div>
              <div class="form-check my-2 mx-5">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault0"
                  id="flexRadioDefault3"
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  Lowercase
                </label>
              </div>
              <div class="form-check my-2 mx-5">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault0"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Capitalized
                </label>
              </div>
              </div>
              <div className="container mt-5 text-center">
              <button className="btn btn-info px-4 py-2">Save</button>
              </div>

            </div>
            <div
              className="tab-pane fade"
              id="loyalty-scheme"
              role="tabpanel"
              aria-labelledby="loyalty-scheme-tab"
            >
              <h6 className="px-1">Loyalty Scheme</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="referral-scheme"
              role="tabpanel"
              aria-labelledby="referral-scheme-tab"
            >
              <h6 className="px-1">Referral Scheme</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="config"
              role="tabpanel"
              aria-labelledby="config-tab"
            >
              <h6 className="px-1">CONFIGURATION</h6>
              <hr />
              <br />
              <label for="pre-order">Pre Order Time (in mins)</label>
              <input
                id="pre-order"
                className="form-control my-2 py-2 w-50"
                type="text"
                placeholder="1000"
              />
              <label for="otp" className="boldtext mt-4">
                Customer OTP Verification
              </label>
              <input
                id="otp"
                className="form-control my-2 py-2 w-50"
                type="text"
                placeholder="No"
              />
              <div className="container mt-5 text-center">
                <button className="btn btn-info px-4 py-2">Save</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="content"
              role="tabpanel"
              aria-labelledby="content-tab"
            >
              <h6 className="px-1">Content</h6>
              <hr />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsTable;
