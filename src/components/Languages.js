import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Languages() {
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

      <div className="row mt-5 px-5 responsiveness w-75">
        <div className="col-md-10">
          <h5>Language</h5>
        </div>

        <div className="col-md-2">
        <Link to="/addlanguage">
          <button className="btn btn-outline-dark w-100">
            <i className="fa-solid fa-plus me-2"></i>Add
          </button>
          </Link>
        </div>
      </div>

      <div className="table-responsive mt-5 w-75">
        <table className="table mt-2 mb-5 mx-4 bs">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Locale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">en</th>
              <td><Link to="/translations">en</Link></td>
            </tr>
            <tr>
            <th scope="row">en</th>
            <td><Link to="/translations">en</Link></td>
            </tr>
            <tr>
            <th scope="row">en</th>
            <td><Link to="/translations">en</Link></td>
            </tr>
            <tr>
            <th scope="row">en</th>
            <td><Link to="/translations">en</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Languages;
