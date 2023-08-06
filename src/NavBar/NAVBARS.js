import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../routes/Home/HomePage";
import CountactUSPage from "../routes/Contactus/Contactus.js";
import AboiutUsPage from "../routes/Aboutus/Aboutus.js";
function NavBars() {
  return (
    <div className="NavBARS-Main">
      <nav
        class="navbar navbar-expand navbar-dark bg-dark"
        aria-label="Second navbar example"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            API use link
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to="/Home" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/ContactUs" class="nav-link">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/AboutUs" class="nav-link">
                  About Us
                </Link>
              </li>
            </ul>
            <form role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/ContactUs" element={<CountactUSPage />}></Route>
        <Route path="/AboutUs" element={<AboiutUsPage />}></Route>
      </Routes>
    </div>
  );
}

export default NavBars;
