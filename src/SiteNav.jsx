import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

function SiteNav() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Sabio"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  to={"./"}
                  className="nav-link px-2 text-white link-button"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"./sydney"}
                  className="nav-link px-2 text-white link-button"
                >
                  Sydney
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"./cats"}
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Cats
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"./games"}
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"./jobs"}
                  className="nav-link active px-2 text-white link-button"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"./random"}
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Random
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <Link
                to={"./logout"}
                type="button"
                className="btn btn-outline-light me-2"
              >
                Logout
              </Link>

              <Link
                to={"./login"}
                type="button"
                className="btn btn-outline-light me-2"
              >
                LogIn
              </Link>

              <Link to={"./register"} type="button" className="btn btn-warning">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default SiteNav;
