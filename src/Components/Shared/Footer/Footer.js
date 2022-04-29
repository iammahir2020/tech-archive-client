import logoLight from "../../../images/logoLight.png";
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faLocationPin,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Footer = () => {
  const [user, loading, error] = useAuthState(auth);
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-container container">
        <div className="footer-info">
          <div className="address">
            <FontAwesomeIcon icon={faLocationPin} /> <span> Address</span>
            <p>2138 Dane Street, Spokane WA, Washington, 99201.</p>
          </div>
          <div className="contact">
            <FontAwesomeIcon icon={faPhone} /> <span> Contact</span>
            <p>+509-267-1042</p>
          </div>
        </div>
        <div className="footer-social">
          <FontAwesomeIcon icon={faLink} /> <span> Social Links</span>
          <div className="social-container">
            <Nav.Link href="https://www.instagram.com/" target="blank">
              <FontAwesomeIcon className="footer-icon" icon={faInstagram} />{" "}
              <span>Instagram</span>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/" target="blank">
              <FontAwesomeIcon
                className="footer-icon"
                icon={faFacebookSquare}
              />{" "}
              <span>Facebook</span>
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/" target="blank">
              <FontAwesomeIcon className="footer-icon" icon={faYoutube} />{" "}
              <span>Youtube</span>
            </Nav.Link>
            <Nav.Link href="https://www.pinterest.com/" target="blank">
              <FontAwesomeIcon className="footer-icon" icon={faPinterest} />{" "}
              <span>Pinterest</span>
            </Nav.Link>
          </div>
        </div>
        <div className="footer-social">
          <FontAwesomeIcon icon={faLink} /> <span> Page Links</span>
          <div className="page-links">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={NavLink} to="/add">
                  Add Item
                </Nav.Link>
                <Nav.Link as={NavLink} to="/manage">
                  Manage Inventory
                </Nav.Link>
              </>
            )}
          </div>
        </div>
        <div className="footer-logo">
          <img src={logoLight} alt="" />
          <p className="about">
            Tech Archive is a warehouse management system where users can keep
            tract of all the items in the warehouse. All the information such as
            item price, quantity etc can be stored using the system.
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>All Rights Reserved &copy; {year} tech archive</p>
      </div>
    </div>
  );
};

export default Footer;
