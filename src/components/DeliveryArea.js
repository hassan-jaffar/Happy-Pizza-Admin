import React, { useState, useEffect } from "react";
import axios from "axios";

function DeliveryArea() {
  const [showBtn, setshowBtn] = useState(true)
  const [showForm, setshowForm] = useState(false)
  const [zone, setzone] = useState([]);

  // form states start
  const [name, setname] = useState("")
  const [discount, setdiscount] = useState("")
  const [delivery, setdelivery] = useState("")
  const [delay, setdelay] = useState("")
  const [radius, setradius] = useState("")
  const [active, setactive] = useState(true)
  // form states end

  // Form Data getting by ID 
  const [name1, setname1] = useState({})
  const [discount1, setdiscount1] = useState("")
  const [delivery1, setdelivery1] = useState("")
  const [delay1, setdelay1] = useState("")
  const [radius1, setradius1] = useState("")
  const [active1, setactive1] = useState()
  // Form Data getting by ID 

  async function save(e) {

    const details = {
      name,
      discount,
      delivery,
      delay,
      radius,
      active,
      resturant_ID: JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
    }
    console.log(details)
    try {
      const result = await axios.post("http://localhost:5000/api/setting/addzone", details).data;
      setname('');
      setdiscount("");
      setdelay('');
      setdelivery('');
      setradius('');
      setactive(true);
    } catch (error) {
      console.log(error)
    }
    e.preventDefault();
  }

  function disableBtn() {
    setshowBtn(false)
    // alert("Clicked")
  }
  function showAddBtn() {
    setshowBtn(true)
    setshowForm(false)
  }

  async function accordionClick(ID) {
    try {
      const result = await (await axios.post(`http://localhost:5000/api/setting/showzonebyid/${ID}`)).data;
      setname1(result.data[0].name)
      setdiscount1(result.data[0].discount);
      setdelay1(result.data[0].delay);
      setdelivery1(result.data[0].delivery);
      setradius1(result.data[0].radius);
      setactive1(result.data[0].active === "true" ? true : false);

    } catch (error) {
      console.log(error)
    }
    // alert(ID)
  }

  async function deletezone(ID) {
    try {
      const result = await (await axios.post(`http://localhost:5000/api/setting/deletezone/${ID}`)).data;
      update();
    } catch (error) {
      console.log(error)
    }
  }

  async function updatezone(ID) {
    const details = {
      name1,
      delay1,
      delivery1,
      radius1,
      active1,
      discount1,
      ID
    }
    try {
      const result = await axios.post("http://localhost:5000/api/setting/updatezone", details).data;
      accordionClick(ID)
      update()
    } catch (error) {
      console.log(error)
    }
  }

  async function update() {
    const details = {
      resturant_ID: JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
    }
    try {
      const data = await (
        await axios.post(`http://localhost:5000/api/setting/showzones`, details)
      ).data;
      setzone(data.data)
      // setupdatetitle(data.data['title']);
      // setupdatedescription(data.data['description']);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const details = {
        resturant_ID: JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
      }
      try {
        const data = await (
          await axios.post(`http://localhost:5000/api/setting/showzones`, details)
        ).data;
        setzone(data.data)
        // setupdatetitle(data.data['title']);
        // setupdatedescription(data.data['description']);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
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
            className="nav-link active deliveryareabtn"
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
            <label htmlFor="redeem" className="">
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
                {/* <button className="btn btn-light my-5 bs w-100">zone1</button> */}
                {zone.map((zones) => {
                  return <>
                    <div class="accordion" id={`accordion${zones.ID}`} onClick={() => accordionClick(`${zones.ID}`)}>
                      <div class="accordion-item my-4 bs w-100">
                        <h2 class="accordion-header" id={`heading${zones.ID}`}>
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${zones.ID}`} aria-expanded="false" aria-controls={`collapse${zones.ID}`}>
                            {zones.name}
                          </button>
                        </h2>
                        <div id={`collapse${zones.ID}`} class="accordion-collapse collapse" aria-labelledby={`#heading${zones.ID}`} data-bs-parent={`#accordion${zones.ID}`}>
                          <div class="accordion-body">
                            {/* <form> */}
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Zone Name</label>
                              <input type="text" className="form-control" value={name1} onChange={(e) => { setname1(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Discount</label>
                              <input type="number" className="form-control" value={discount1} onChange={(e) => { setdiscount1(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Delivery Fee</label>
                              <input type="number" className="form-control" value={delivery1} onChange={(e) => { setdelivery1(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Delay Time</label>
                              <input type="number" className="form-control" value={delay1} onChnage={(e) => { setdelay1(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Radius (In Miles)</label>
                              <input type="number" className="form-control" value={radius1} onChange={(e) => { setradius1(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" value={active1} checked={active1} onChange={(e) => { setactive1(e.target.checked) }} id="exampleCheck1" />
                              <label className="form-check-label" for="exampleCheck1">Active</label>
                            </div>
                            <div className="row">
                              <div className="col-md-5">
                                <button className="btn btn-danger" onClick={() => deletezone(`${zones.ID}`)}>Remove</button>
                              </div>
                              <div className="col-md-5">
                                <button className="btn btn-primary" onClick={() => updatezone(`${zones.ID}`)}>Upgrade</button>
                              </div>
                            </div>

                            {/* </form> */}
                          </div>
                        </div>
                      </div>

                    </div>
                  </>
                })}

                {showBtn === true && showForm === false ? <>

                  <button onClick={() => disableBtn()} className="btn btn-primary mb-5">
                    Add another zone
                  </button>
                </> : <>
                  {/* <form> */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Zone Name</label>
                    <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Discount</label>
                    <input type="number" value={discount} onChange={(e) => { setdiscount(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Delivery Fee</label>
                    <input type="number" value={delivery} onChange={(e) => { setdelivery(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Delay Time</label>
                    <input type="number" value={delay} onChange={(e) => { setdelay(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Radius (In Miles)</label>
                    <input type="number" value={radius} onChange={(e) => { setradius(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={active} onChange={(e) => { setactive(e.target.checked) }} />
                    <label className="form-check-label" for="exampleCheck1">Active</label>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <button type="submit" className="btn btn-danger" onClick={() => showAddBtn()}>Cancel</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary" onClick={() => save()}>Save</button>
                    </div>
                  </div>

                  {/* </form> */}
                </>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryArea;
