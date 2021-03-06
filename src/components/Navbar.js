import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let mystyle = { color: "white" };
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <label className="navbar-brand" style={mystyle} href="/">
              {props.NewsMonkey}
            </label>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={props.togglemode}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label "
                  style={mystyle}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable {props.mode} Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}

