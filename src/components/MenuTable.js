import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/Menu.css";

function MenuTable() {
  const [category, setcategory] = useState([]);
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("")
  const [description, setdescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  async function add() {
    const user = {
      name,
    };

    try {
      const result = await axios.post(
        " http://localhost:5000/api/admin/createmenu",
        user
      ).data;
      console.log(result);
      update();
      setName("");
    } catch (error) {
      console.log(error);
    }
  }

  async function update() {
    try {
      const data = await (
        await axios.get("http://localhost:5000/api/admin/getallmenu")
      ).data;
      setcategory(data.data);
      console.log(category);
    } catch (error) {
      console.log(error);
    }
  }

  async function del(ID) {
    const user = {
      ID,
    };

    try {
      const result = await axios.post(
        " http://localhost:5000/api/admin/deletemenu",
        user
      ).data;
      console.log(result);
      update();
      setName("");
    } catch (error) {
      console.log(error);
    }
  }

  async function edit(ID) {
    const user = {
      ID,
      title
    };

    try {
      const result = await axios.post(
        " http://localhost:5000/api/admin/updatemenu ",
        user
      ).data;
      console.log(result);
      update();
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  }

  async function update1() {
    try {
      const data = await (
        await axios.get("http://localhost:5000/api/admin/getallitems")
      ).data;
      setItem(data.data);
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  }

  async function addItem(category_id) {
    const user = {
      category_id,
      title,
      description,
      price,
      image
    };

    try {
      const result = await axios.post(
        " http://localhost:5000/api/admin/createitem ",
        user
      ).data;
      console.log(result);
      update1();
      setName("");
      setTitle("");
      setPrice("");
      setdescription("");
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getallmenu")
        ).data;
        setcategory(data.data);
        console.log(category);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getallitems")
        ).data;
        setItem(data.data);
        console.log(item);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
              data-bs-target="#newcategory"
            >
              <i className="fa-solid fa-plus btnicon"></i>ADD NEW CATEGORY
            </button>
            <div
              className="modal fade"
              id="newcategory"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="newcategoryLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="newcategoryLabel">
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                    <div className="form-check form-switch">
                    <div className="row justify-content-between">
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
                    <button
                      type="button"
                      onClick={add}
                      className="btn btn-primary"
                    >
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

          {category &&
            category.map((categorys) => {
              return (
                <>
                  <div className="accordion" id={`accordion${categorys.ID}`}>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id={`heading${categorys.ID}`}
                      >
                        <button
                          className="accordion-button collapsed boldtext"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${categorys.ID}`}
                          aria-expanded="false"
                          aria-controls={`collapse${categorys.ID}`}
                        >
                          {categorys.Name}
                          <div className="mlauto">
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target={`#additemModal${categorys.ID}`}
                              className="btn btn-info menu-buttons"
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target={`#edititemModal${categorys.ID}`}
                              className="btn btn-warning menu-buttons"
                              // onClick={() => {
                              //   edit(categorys.ID);
                              // }}
                            >
                              <i className="fa-solid fa-pencil"></i>
                            </button>
                            <button
                              className="btn btn-danger menu-buttons"
                              onClick={() => {
                                del(categorys.ID);
                              }}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                            <button className="btn btn-info menu-buttons">
                              <i className="fa-solid fa-arrow-down"></i>
                            </button>
                            <button className="btn btn-info menu-buttons">
                              <i className="fa-solid fa-arrow-up"></i>
                            </button>
                          </div>
                        </button>
                      </h2>

                      <div
                        id={`collapse${categorys.ID}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${categorys.ID}`}
                        data-bs-parent={`#accordion${categorys.ID}`}
                      >
                        <div className="accordion-body menudetails">
                          <div className="row fullwidth">
                            {item &&
                              item.map((items) => {
                                return (
                                  <>
                                    {items.category_id === categorys.ID ? (
                                      <>
                                        <div className="col-md-4">
                                          <div className="menucards bs">
                                          <Link to="/item-management" style={{ textDecoration: 'none' }}>
                                            <div className="row blackclr">
                                              <div className="col-md-12">
                                                <h5 className="d-block">
                                                  {items.Title}
                                                </h5>
                                                <p className="mb-5 d-block">
                                                  {items.Title}
                                                </p>
                                              </div>
                                            </div>
                                            </Link>
                                            <div className="row">
                                              <div className="col-md-6">
                                                <p>
                                                  {items.Price !==
                                                  "undefined" ? (
                                                    <p>
                                                      $ {items.Price}
                                                      <br />
                                                      AVAILABLE
                                                    </p>
                                                  ) : (
                                                    <>AVAILABLE</>
                                                  )}
                                                </p>
                                              </div>
                                              <div className="col-md-6 text-end">
                                                <button
                                                  className="btn btn-light"
                                                  type="button"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#addimgModal"
                                                >
                                                  <i className="fa-solid fa-camera"></i>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                );
                              })}
                          </div>
                          {/* <div className="row">
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
                            <button className="btn btn-light"><i className="fa-solid fa-camera"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={`additemModal${categorys.ID}`}
                    tabindex="-1"
                    aria-labelledby="additemModalLabel"
                    aria-hidden="true"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title boldtext"
                            id="additemModalLabel"
                          >
                            ADD NEW ITEM
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
                            className="form-control mb-3"
                            placeholder="Item Name..."
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                          />
                          <textarea
                            className="form-control my-3"
                            placeholder="Item Description..."
                            rows="3"
                            value={description}
                            onChange={(e)=>{setdescription(e.target.value)}}
                          />
                          <input
                            className="form-control my-3"
                            placeholder="Item Price..."
                            value={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                          />
                          <div className="form-check form-switch my-3">
                          <div className="row justify-content-between">
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
                          </div>
                          <div class="input-group my-3">
                            <input
                              type="file"
                              class="form-control"
                              id="inputGroupFile02"
                            />
                          </div>
                          <div className="text-center my-3">
                            <img className="modal-img" src="" value={image} />
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
                          <button type="button" className="btn btn-primary" onClick={()=>{addItem(categorys.ID)}}>
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={`edititemModal${categorys.ID}`}
                    tabindex="-1"
                    aria-labelledby="edititemModalLabel"
                    aria-hidden="true"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title boldtext"
                            id="edititemModalLabel"
                          >
                            EDIT CATEGORY
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <input type="text" placeholder={categorys.Name} className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                          <div className="form-check form-switch my-3">
                          <div className="row justify-content-between">
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
                          </div>
                          <h4 className="mt-3 mb-2 boldtext">Available Days</h4>
                          <div className="form-check form-switch my-2">
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
                          <div className="form-check form-switch my-2">
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
                          <div className="form-check form-switch my-2">
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
                          <div className="form-check form-switch my-2">
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
                          <div className="form-check form-switch my-2">
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
                          <div className="form-check form-switch my-2">
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
                          <div className="form-check form-switch my-2">
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
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary" onClick={()=>{edit(categorys.ID)}}>
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="addimgModal"
                    tabindex="-1"
                    aria-labelledby="addimgModalLabel"
                    aria-hidden="true"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title boldtext"
                            id="addimgModalLabel"
                          >
                            EDIT ITEM IMAGE
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div class="input-group my-3">
                            <input
                              type="file"
                              class="form-control"
                              id="inputGroupFile02"
                            />
                          </div>
                          <div className="text-center my-3">
                            <img className="modal-img" src="" />
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
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MenuTable;
