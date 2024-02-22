import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row_">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>categorys</h4>
            <ul>
              <li>
                <a href="#">food</a>
              </li>
              <li>
                <a href="#">music</a>
              </li>
              <li>
                <a href="#">art</a>
              </li>
              <li>
                <a href="#">animals</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "#ffbe00",
                  }}
                />
              </a>
              
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "#ffbe00",
                  }}
                />
              </a>
              <a href="#">
              <FontAwesomeIcon
                  icon={faTelegram}
                  style={{
                    color: "#ffbe00",
                  }}/>
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
