import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemManagementTable() {
  const { itemid } = useParams();
  const { categoryid } = useParams();
  const [item, setitem] = useState({Title:""})
  const [title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState("")

  async function handleUpdate() {
    const detail ={
      title,
      Description,
      Price
    }

    try {
      const result = await axios.post(
        `http://localhost:5000/api/admin/updateitemmanagement/${itemid}/${categoryid}`,
        detail
      ).data;
      console.log(result);
      toast.success("Item has been updated")
      setInterval(() => {
        window.location.href="/menu"
      }, 2000);

    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong try again!")
    }
    
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(`http://localhost:5000/api/admin/getitemmanagement/${itemid}/${categoryid}`)
        ).data;
        setitem(data.data);
        console.log(item);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  

  return (
    <>
        <ToastContainer />
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
              <label htmlFor="itemname">Item Name</label>
              <input
                id="itemname"
                type="text"
                className="form-control mt-2 mb-5 py-3"
                // placeholder={`${item.Title}`}
                value={item.Title}
                onChange={(e) => { setitem(e.target.value); setTitle(e.target.value) }}
              />
              <label htmlFor="description">Item Description</label>
              <textarea
                id="description"
                className="form-control mt-2 mb-5"
                placeholder="Item Description..."
                rows="5"
                value={item.Description}
                onChange={(e) => { setitem(e.target.value); setDescription(e.target.value) }}
              />
              <label htmlFor="price">Item Price</label>
              <input
                id="price"
                className="form-control mt-2 mb-5 py-3"
                placeholder="Item Price..."
                value={item.Price}
                onChange={(e) => { setitem(e.target.value); setPrice(e.target.value) }}
              />
              <label htmlFor="vat">
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
                    htmlFor="flexSwitchCheckDefault"
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
                    htmlFor="flexSwitchCheckDefault"
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
                    htmlFor="flexSwitchCheckDefault"
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
              <div className="input-group my-3">
                <input type="file" className="form-control" id="inputGroupFile02" />
              </div>
              <div className="text-center my-4">
                <img className="managementimg" src="" />
              </div>
              <h4 className="mt-5 mb-2 boldtext">Available Days</h4>
              <div className="w-25">
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" htmlFor="sunday">
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
                    <label className="form-check-label" htmlFor="monday">
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
                    <label className="form-check-label" htmlFor="tuesday">
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
                    <label className="form-check-label" htmlFor="wednesday">
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
                    <label className="form-check-label" htmlFor="thursday">
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
                    <label className="form-check-label" htmlFor="friday">
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
                    <label className="form-check-label" htmlFor="saturday">
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
                <button className="btn btn-primary my-5" onClick={handleUpdate}>Update Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemManagementTable;
