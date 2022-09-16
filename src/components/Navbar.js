import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const getstatus = localStorage.getItem("status");
  function logout() {
    localStorage.setItem("status", "false");
    localStorage.removeItem("currentuser");
    window.location.href = "/";
  }
  return (
    <>
      <nav className="navbar-light justify-content-center mainnavbar">
        <div className="row menu responsiveness">
          <div className="col-md-4 menuitems text-start">
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              // onClick={()=>document.getElementsByClassName("dashboardbody").style.marginLeft = "70px"}
            >
              <h2>
                <i className="fa-solid fa-bars"></i>
              </h2>
            </button>
          </div>

          <div className="col-md-4 menuitems text-center">
            <Link to="/home">
              <img
                className="menuimg"
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
              />
            </Link>
          </div>

          <div className="col-md-4 menuitems text-end">
            {getstatus === "true" ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle navbaruserbtn bs"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>
                  </button>
                  <ul
                    className="dropdown-menu userddmenu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="dropdown-item">
                      <p className="dropdown-item text-center boldtext">
                        {getstatus === "true" ? (
                          <>
                            {
                              JSON.parse(localStorage.getItem("currentuser"))[0]
                                .name
                            }
                          </>
                        ) : (
                          <>OWNER</>
                        )}
                      </p>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/profile">
                        <button className="btn btn-light userdditem dropdown-item">
                          My Profile
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <button className="btn btn-light userdditem dropdown-item">
                          Dashboard
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/liveorders">
                        <button className="btn btn-light userdditem dropdown-item">
                          Live Orders
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/orders">
                        <button className="btn btn-light userdditem dropdown-item">
                          Orders
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/setting">
                        <button className="btn btn-light userdditem dropdown-item">
                          Restaurant
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu">
                        <button className="btn btn-light userdditem dropdown-item">
                          Menu
                        </button>
                      </Link>
                      <Link to="/change-password">
                        <button className="btn btn-light userdditem dropdown-item pinkbg">
                          <i className="fa-solid fa-lock btnicon"></i>Close
                          Shift
                        </button>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Link to="/">
                      <button
                        className="btn btn-light userdditem dropdown-item"
                        onClick={logout}
                      >
                        LOG OUT
                      </button>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/">
                  <button className="btn btn-light">
                    <i className="fa-solid fa-user btnicon"></i>Sign in
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
