import React,{useState,useEffect} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import './LiveOrders.css'

function LiveOrders() {
    const [info, setInfo] = useState([])
    
    useEffect(() => {
        async function fetchData() {
          try {
            const data = await (await axios.get('http://localhost:5000/api/admin/getliveorders')).data
            setInfo(data.data)
            console.log(data.data)

    
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
        setInterval(() => {
            fetchData();
          }, 5000);
        
      }, [])

      async function add(id,status) {
        const user = {
            cart_Id:id,
            status:status
        };

        console.log(user)

        try {

            const result = await axios.post("http://localhost:5000/api/admin/acceptorder",user).data;
            console.log(result)

        } catch (error) {
            console.log(error);

        }
      }

      async function reject(id,status) {
        const user = {
            cart_Id:id
        };

        console.log(user)

        try {

            const result = await axios.post("http://localhost:5000/api/admin/rejectorder",user).data;
            console.log(result)

        } catch (error) {
            console.log(error);

        }
      }
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-lg-3 col-xl-2 px-sm-2 sidebar">
                        <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
                            <h5 className="my-5 text-center">OWNER</h5>
                            <ul
                                className="nav nav-tabs mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu"
                            >
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-house"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                        <span className="ms-1 d-none d-sm-inline">
                                            {" "}
                                            Live Orders
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-chart-line"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Orders</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Customers</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-car"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Drivers...</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-star"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Ranks...</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-book"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Menu...</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-gear"></i>
                                        <span className="ms-1 d-none d-sm-inline"> Setting...</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/addresses"
                                        className="nav-link align-middle sidebartag"
                                    >
                                        <i className="fa-solid fa-arrows-to-dot"></i>
                                        <span className="ms-1 d-none d-sm-inline">Marketing</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle sidebartag">
                                        <i className="fa-solid fa-lock-open"></i>
                                        <span className="ms-1 d-none d-sm-inline">Password</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <h1 style={{marginTop: '30px', marginBottom: '30px', fontWeight: 'normal'}}>LIVE ORDERS</h1>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card cardattributes">
                                    <div className="card-header titleheader">
                                        <h4 className="card-title ">New Orders</h4>
                                    </div>
                                    <div className="card-body bordersofcard">
                                        {info && info.map((items)=>{
                                            return <>
                                            {items.Orderstatus === '1' ?(<>
                                                <div class="accordion" id={`accordion${items.cart_Id}`}>
                                            {/* Div start */}
                                            <div class="accordion-item accitem"  key={`${items.cart_Id}`} >
                                                <h2 class="accordion-header cursor" id={`heading${items.cart_Id}`} data-bs-toggle="collapse" data-bs-target={`#collapse${items.cart_Id}`} aria-expanded="true" aria-controls={`#collapse${items.cart_Id}`}>

                                                    <div className="row justify-content-center align-items-center">
                                                        <div className="col-md-2 imghead">
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436" width={28} height={28} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketext"># -001</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">unpaid</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">Delivery</h6>
                                                        </div>
                                                    </div>
                                                </h2>
                                                <div id={`collapse${items.cart_Id}`} class="accordion-collapse collapse show" aria-labelledby={`heading${items.ID}`} data-bs-parent={`accordion${items.cart_Id}`}>
                                                    <div class="accordion-body">
                                                        <h2 className="emailformat">{items.name}</h2>
                                                        <h2 className="addresstime"><span></span>House No: {items.house}, {items.flat},{items.street},{items.postcode},{items.town}</h2>
                                                        {/* <h2 className="addresstime">Time slot: 8:00 PM - 8:30 PM</h2> */}
                                                        <div className="row btnrow">
                                                            <div className="col-md-6">
                                                                <button type="button" className="btn actionbtns" onClick={()=>{add(items.cart_Id,items.Orderstatus)}} >Accept</button>
                                                            </div>
                                                            <div className="col-md-6">

                                                                <button type="button" className="btn actionbtns" onClick={()=>{reject(items.cart_Id,items.Orderstatus)}}>Reject</button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Div close */}
                                        </div>
                                            </>):(<></>)}
                                        
                                        </>
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardattributes">
                                    <div className="card-header titleheaderaccepted">
                                        <h4 className="card-title">Accepted/Cooking</h4>
                                    </div>
                                    <div className="card-body bordersofcard">
                                        {info && info.map((items)=>{
                                            return <>
                                            {items.Orderstatus === '2' ?(<>
                                            
                                                <div class="accordion" id={`accordion${items.cart_Id}`}>
                                            <div class="accordion-item accitem">
                                                <h2 class="accordion-header cursor" id={`heading${items.cart_Id}`} data-bs-toggle="collapse" data-bs-target={`#collapse${items.cart_Id}`} aria-expanded="true" aria-controls={`#collapse${items.cart_Id}`}>

                                                    <div className="row justify-content-center align-items-center">
                                                        <div className="col-md-2 imghead">
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436" width={28} height={28} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketext"># -001</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">unpaid</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">Delivery</h6>
                                                        </div>
                                                    </div>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby={`heading${items.ID}`} data-bs-parent={`accordion${items.cart_Id}`}>
                                                    <div class="accordion-body">
                                                        <h2 className="emailformat">{items.name}</h2>
                                                        <h2 className="addresstime"><span></span>House No: {items.house}, {items.flat},{items.street},{items.postcode},{items.town}</h2>
                                                        {/* <h2 className="addresstime">Time slot: 8:00 PM - 8:30 PM</h2> */}
                                                        <div className="row btnrow">
                                                            <div className="col-md-6">
                                                                <button type="button" className="btn actionbtns" onClick={()=>{add(items.cart_Id,items.Orderstatus)}}>Accept</button>
                                                            </div>
                                                            <div className="col-md-6">

                                                                <button type="button" className="btn actionbtns" onClick={()=>{reject(items.cart_Id,items.Orderstatus)}}>Reject</button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            
                                            </>):(<></>)}
                                            
                                            </>

                                        })}

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardattributes">
                                    <div className="card-header titleheadercompleted">
                                        <h4 className="card-title ">Completed</h4>
                                    </div>
                                    <div className="card-body bordersofcard">
                                    {info && info.map((items)=>{
                                            return <>
                                            {items.Orderstatus === '3' ?(<>
                                            
                                                <div class="accordion" id={`accordion${items.cart_Id}`}>
                                            <div class="accordion-item accitem">
                                                <h2 class="accordion-header cursor" id={`heading${items.cart_Id}`} data-bs-toggle="collapse" data-bs-target={`#collapse${items.cart_Id}`} aria-expanded="true" aria-controls={`#collapse${items.cart_Id}`}>

                                                    <div className="row justify-content-center align-items-center">
                                                        <div className="col-md-2 imghead">
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436" width={28} height={28} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketext"># -001</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">unpaid</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h6 className="Stroketexts">Delivery</h6>
                                                        </div>
                                                    </div>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby={`heading${items.ID}`} data-bs-parent={`accordion${items.cart_Id}`}>
                                                    <div class="accordion-body">
                                                        <h2 className="emailformat">{items.name}</h2>
                                                        <h2 className="addresstime"><span></span>House No: {items.house}, {items.flat},{items.street},{items.postcode},{items.town}</h2>
                                                        {/* <h2 className="addresstime">Time slot: 8:00 PM - 8:30 PM</h2> */}
                                                        <div className="row btnrow">
                                                            <div className="col-md-6">
                                                                <button type="button" className="btn actionbtns" onClick={()=>{add(items.cart_Id,items.Orderstatus)}}>Accept</button>
                                                            </div>
                                                            <div className="col-md-6">

                                                                <button type="button" className="btn actionbtns" onClick={()=>{reject(items.cart_Id,items.Orderstatus)}}>Reject</button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            
                                            </>):(<></>)}
                                            
                                            </>

                                        })}
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

export default LiveOrders;
