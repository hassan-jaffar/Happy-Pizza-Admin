import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Translations() {
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
          <h3>Translation</h3>
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
          <button className="btn btn-light w-100">
            <i className="fa-solid fa-plus me-2"></i>Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Translations;
