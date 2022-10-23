import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Translations() {
  const [translation, settranslation] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const details = {
          id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
        }
        const data = await (
          await axios.post(
            "http://localhost:5000/api/superadmin/gettranslation",
            details
          )
        ).data;

        settranslation(data.data)
      } catch (error) {
        console.log(error, "err");
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary responsiveness">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/languages">
                  <i className="fa-solid fa-globe me-2"></i>
                  Languages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/translations"
                >
                  <i className="fa-solid fa-hourglass-end me-2"></i>
                  Translations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row mt-5 px-5 responsiveness">
        <div className="col-md-2">
          <h5>Translation</h5>
        </div>
        <div className="col-md-4">
          <form className="d-flex">
            <input
              className="form-control w-100"
              type="search"
              placeholder="Search all transactions"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="col-md-2">
          <li className="dropdown">
            <button
              className="btn btn-light dropdown-toggle w-100"
              id="dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown">
              <li className="dropdown-item">EN</li>
              <li className="dropdown-item">Another language</li>
            </ul>
          </li>
        </div>
        <div className="col-md-3">
          <li className="dropdown">
            <button
              className="btn btn-light dropdown-toggle w-100"
              id="ndropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ---
            </button>
            <ul className="dropdown-menu" aria-labelledby="ndropdown">
              <li className="dropdown-item">item</li>
              <li className="dropdown-item">Another item</li>
              <li className="dropdown-item">Another item</li>
              <li className="dropdown-item">Another item</li>
            </ul>
          </li>
        </div>
        <div className="col-md-1">
        <Link to="/addtranslation">
          <button className="btn btn-light w-100">
            <i className="fa-solid fa-plus me-2"></i>Add
          </button>
          </Link>
        </div>
      </div>

      <div className="table-responsive mt-5">
        <table className="table mt-2 mb-5 mx-4 bs">
          <thead>
            <tr>
              <th scope="col">GROUP/SINGLE</th>
              <th scope="col">KEY</th>
              <th scope="col">EN</th>
              <th scope="col">EN</th>
            </tr>
          </thead>
          <tbody>
            {translation && translation.map((type)=>{
              return <>
              <tr>
              <th scope="row">{type.groupvalidation}</th>
              <td>{type.keyinvalid}</td>
              <td>"{type.value}"</td>
              <td>
                <Link to="/translations" style={{color: "black"}}><i className="fa-solid fa-pencil me-2"></i></Link> "{type.value}"
              </td>
            </tr>
              </>
            }) }
            
            {/* <tr>
              <th scope="row">auth</th>
              <td>failed</td>
              <td>"These credentials do not match our records"</td>
              <td>
                <Link to="/translations" style={{color: "black"}}><i className="fa-solid fa-pencil me-2"></i></Link> "These
                credentials do not match our records"
              </td>
            </tr>
            <tr>
              <th scope="row">auth</th>
              <td>failed</td>
              <td>"These credentials do not match our records"</td>
              <td>
                <Link to="/translations" style={{color: "black"}}><i className="fa-solid fa-pencil me-2"></i></Link> "These
                credentials do not match our records"
              </td>
            </tr>
            <tr>
              <th scope="row">auth</th>
              <td>failed</td>
              <td>"These credentials do not match our records"</td>
              <td>
                <Link to="/translations" style={{color: "black"}}><i className="fa-solid fa-pencil me-2"></i></Link> "These
                credentials do not match our records"
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Translations;
