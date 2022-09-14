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
                <i className="fa-solid fa-gears btnicon"></i>
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
                <i className="fa-solid fa-mobile-screen btnicon"></i>
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
                <i className="fa-solid fa-location-dot btnicon"></i>
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
                <i className="fa-solid fa-clock btnicon"></i>
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
                <i className="fa-solid fa-house btnicon"></i>
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
                <i className="fa-solid fa-bars btnicon"></i>
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
                <i className="fa-solid fa-crown btnicon"></i>
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
                <i className="fa-solid fa-gift btnicon"></i>
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
                <i className="fa-solid fa-list-check btnicon"></i>
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
                <i className="fa-solid fa-heading btnicon"></i>
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
              <h6 className="px-1">RESTAURANT MANAGEMENT</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="apps"
              role="tabpanel"
              aria-labelledby="apps-tab"
            >
              <h6 className="px-1">APPS</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="delivery-area"
              role="tabpanel"
              aria-labelledby="delivery-area-tab"
            >
              <h6 className="px-1">DELIVERY AREA</h6>
              <hr />
              <br />
              <nav>
                <div
                  className="nav nav-tabs settingsnavs justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link deliveryareabtn"
                    id="takeaway-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#takeaway"
                    type="button"
                    role="tab"
                    aria-controls="takeaway"
                    aria-selected="false"
                  >
                    Take Away Location
                  </button>
                  <button
                    className="nav-link deliveryareabtn"
                    id="delivery-zones-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#delivery-zones"
                    type="button"
                    role="tab"
                    aria-controls="delivery-zones"
                    aria-selected="false"
                  >
                    Delivery Zones
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="takeaway"
                  role="tabpanel"
                  aria-labelledby="takeaway-tab"
                >
                  <div className="container bs br my-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13611.200265534018!2d74.3023612!3d31.4746856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd90d41edbbe08d45!2sINNOVATION.TECH!5e0!3m2!1sen!2s!4v1660646556492!5m2!1sen!2s"
                      className="takeaway-map"
                      width="850"
                      height="650"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="delivery-zones"
                  role="tabpanel"
                  aria-labelledby="delivery-zones-tab"
                >
                  <div className="container my-4 py-4 px-5 bs br">
                    <label for="redeem" className="">
                      Excluded Postal Codes
                    </label>
                    <input
                      id="redeem"
                      className="form-control my-2 py-2"
                      type="number"
                      placeholder="add coma seperated codes"
                    />
                    <button className="btn btn-primary">Save</button>
                    <div className="row">
                      <div className="col-md-8">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13611.200265534018!2d74.3023612!3d31.4746856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd90d41edbbe08d45!2sINNOVATION.TECH!5e0!3m2!1sen!2s!4v1660646556492!5m2!1sen!2s"
                          className="takeaway-map"
                          width="550"
                          height="450"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                      <div className="col-md-4">
                      <button className="btn btn-light my-5 bs w-100">zone1</button>
                      <button className="btn btn-primary mb-5">Add another zone</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="working-hrs"
              role="tabpanel"
              aria-labelledby="working-hrs-tab"
            >
              <h6 className="px-1">WORKING HOURS</h6>
              <hr />
              <br />
            </div>
            <div
              className="tab-pane fade"
              id="open-close"
              role="tabpanel"
              aria-labelledby="open-close-tab"
            >
              <h6 className="px-1">OPEN/CLOSE</h6>
              <hr />
              <br />
              <div className="container d-block">
                <div className="form-check my-2 mx-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault4">
                    Online (as usual)
                  </label>
                </div>
                <div className="form-check my-2 mx-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                  />
                  <label className="form-check-label" for="flexRadioDefault5">
                    Offline For The Whole Day
                  </label>
                </div>
                <div className="form-check my-2 mx-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault6"
                  />
                  <label className="form-check-label" for="flexRadioDefault6">
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
              <h6 className="px-1">MENU TYPE</h6>
              <hr />
              <br />
              <div className="container d-flex">
                <div className="form-check my-2 me-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault0"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Uppercase
                  </label>
                </div>
                <div className="form-check my-2 mx-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault0"
                    id="flexRadioDefault3"
                  />
                  <label className="form-check-label" for="flexRadioDefault3">
                    Lowercase
                  </label>
                </div>
                <div className="form-check my-2 mx-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault0"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
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
              <h6 className="px-1">LOYALTY SCHEME</h6>
              <hr />
              <br />
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
                <button className="btn btn-info px-4 py-2">Save</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="referral-scheme"
              role="tabpanel"
              aria-labelledby="referral-scheme-tab"
            >
              <h6 className="px-1">REFERRAL SCHEME</h6>
              <hr />
              <br />
              <p className="boldtext">Referral Scheme</p>
              <div className="form-check form-switch text-start my-2 w-50">
                <div className="row justify-content-between">
                  <label className="form-check-label" for="referral">
                    Referral Status
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="referral"
                  />
                </div>
              </div>
              <label for="referee" className="mt-3">
                Referee (New Customer):
              </label>
              <input
                id="referee"
                className="form-control my-2 py-2 w-50"
                type="number"
                placeholder="0"
              />
              <label for="referrer" className="mt-3">
                Referrer (Existing Customer):
              </label>
              <input
                id="referrer"
                className="form-control my-2 py-2 w-50"
                type="number"
                placeholder="0"
              />
              <div className="container mt-5 text-center">
                <button className="btn btn-info px-4 py-2">Save</button>
              </div>
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
              <h6 className="px-1">CONTENT</h6>
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
