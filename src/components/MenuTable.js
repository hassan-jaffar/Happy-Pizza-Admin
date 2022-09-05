import React from "react";
import { Link } from "react-router-dom";

function MenuTable() {
  return (
    <>
      <div className="row sharebox">
        <h3 className="my-3 mx-5 responsiveness">RESTAURANT MENU MANAGEMENT</h3>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="d-flex justify-content-between mobile-responsive">
            <h6>RESTAURANT MENU MANAGEMENT</h6>

            <button
              type="button"
              className="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i className="fa-solid fa-plus btnicon"></i>ADD NEW CATEGORY
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      NEW CATEGORY
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <input
                      className="form-control my-4 py-2 px-4"
                      placeholder="Category name..."
                    />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Discountable
                      </label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />

          <div className="accordion" id="accordionExample">

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed boldtext"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Drinks
                  <div className="mlauto">
                    <button className="btn btn-info menu-buttons"><i class="fa-solid fa-plus"></i></button>
                    <button className="btn btn-warning menu-buttons"><i class="fa-solid fa-pencil"></i></button>
                    <button className="btn btn-danger  menu-buttons"><i class="fa-solid fa-trash"></i></button>
                    <button className="btn btn-info  menu-buttons"><i class="fa-solid fa-arrow-down"></i></button>
                    <button className="btn btn-info  menu-buttons"><i class="fa-solid fa-arrow-up"></i></button>
                  </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body menudetails">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="menucards">
                            <div className="row">
                                    <div className="col-md-12">
                                    <h5 className="pb-3 d-block mb-5">RICE AND SAUCE</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>$0.00<br/>AVAILABLE</p>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <button className="btn btn-light"><i class="fa-solid fa-camera"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="menucards">
                            <div className="row">
                                    <div className="col-md-12">
                                    <h5 className="pb-3 d-block mb-5">RICE AND SAUCE</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>$0.00<br/>AVAILABLE</p>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <button className="btn btn-light"><i class="fa-solid fa-camera"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MenuTable;
