import { Link } from "react-router-dom";

function ItemManagementTable() {
  return (
    <>
      <div className="row sharebox">
        <h3 className="my-3 mx-5 responsiveness">ITEM MANAGEMENT</h3>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="d-flex justify-content-between mobile-responsive">
            <h6>ITEM MANAGEMENT</h6>

            <Link to="/menu">
              <button className="btn btn-info">
                <i className="fa-solid fa-backward btnicon"></i>BACK TO ITEMS
              </button>
            </Link>
          </div>
          <br />
          <hr />
          <br />
          <div className="row">
            <div className="col-md-12">
              <label for="itemname">Item Name</label>
              <input
                id="itemname"
                className="form-control mt-2 mb-5 py-3"
                placeholder="Item Name..."
              />
              <label for="description">Item Description</label>
              <textarea
                id="description"
                className="form-control mt-2 mb-5"
                placeholder="Item Description..."
                rows="5"
              />
              <label for="price">Item Price</label>
              <input
                id="price"
                className="form-control mt-2 mb-5 py-3"
                placeholder="Item Price..."
              />
              <label for="vat">
                VAT Percentage (calculated into item price)
              </label>
              <input
                id="vat"
                className="form-control mt-2 mb-5 py-3"
                placeholder="Item VAT Percentage..."
              />
              <div className="form-check form-switch my-5">
                <div className="row justify-content-between my-3">
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Discountable
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <div className="row justify-content-between my-3">
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Item Available
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <div className="row justify-content-between my-3">
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Enable Variant
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
              <div class="input-group my-3">
                <input type="file" class="form-control" id="inputGroupFile02" />
              </div>
              <div className="text-center my-4">
                <img className="managementimg" src="" />
              </div>
              <h4 className="mt-5 mb-2 boldtext">Available Days</h4>
              <div className="w-25">
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" for="sunday">
                      Sunday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="sunday"
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" for="monday">
                      Monday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="monday"
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" for="tuesday">
                      Tuesday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="tuesday"
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" for="wednesday">
                      Wednesday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wednesday"
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" for="thursday">
                      Thursday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="thursday"
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" for="friday">
                      Friday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="friday"
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" for="saturday">
                      Saturday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="saturday"
                    />
                  </div>
                </div>
              </div>
              <div className="text-end mt-5">
                <hr />
                <button className="btn btn-primary my-5">Update Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemManagementTable;
