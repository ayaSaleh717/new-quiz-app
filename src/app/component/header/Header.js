import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="header" style={{backgroundColor:'#FFFDF0'}}>
      <section
        id="topbar"
        className="mb-2 mb-lg-0 mb-sm-0 d-none d-lg-flex align-items-center pt-2 pb-2 text-white topbar-transparent --bs-primary-rgb tophead"
        style={{
          backgroundColor: "#097bed",
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        }}
      >
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6   text-start"
              style={{
                color: "#ffbe00",
              }}
            >
              <span class="px-3">
                <FontAwesomeIcon icon={faPhone} /> +963 993 661 469{" "}
              </span>
              <FontAwesomeIcon icon={faClock} /> Mon-Sat: 11:00 AM - 23:00 PM
            </div>
            <div class="col-md-6 text-end">
              <a href="" class="me-4 text-reset">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "#ffbe00",
                  }}
                />
              </a>
              <a href="" class="me-4 text-reset">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "#ffbe00",
                  }}
                />
              </a>
              <a href="" class="me-4 text-reset">
                <FontAwesomeIcon
                  icon={faTelegram}
                  style={{
                    color: "#ffbe00",
                  }}
                />
              </a>
              <a href="#" class="me-4 text-reset"></a>
            </div>
          </div>
        </div>
      </section>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light nav "
        style={{
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 10px 10px",
          borderRadius: "50% 0%",
        }}
      >
        <div class="container " >
          <a class="navbar-brand" href="index.html">
            <h2 class="fw-bold  mb-2 mb-lg-0 mb-sm-0 logo-header"><span style={{
                color:"#ffbe00"
              }} >Q</span>UIZ  APP</h2>
            <span className="span-1">QUIZ APP</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="bi bi-list"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Feedback
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact us
                </a>
              </li>
             
            </ul>
             <li className="nav-item nav-link " style={{ backgroundColor: "#ffbe00" }}>
                
                  Login
               
              </li>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
