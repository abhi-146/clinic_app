import React from "react";
import Logo from "../../assets/logo.png";
import "../../styles/Footer/index.scss";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__linksWrap">
          <div className="footer__linksWrap-list">
            <img src={Logo} width={170} height={140} alt="Logo" />
            <div className="footer__linksWrap-listLinks --para">
              <p>
                P & O International gives shape to this dream with the help of
                Hi-Tech Prosthetics, Osseo integrated technology and intelligent
                artificial limbs/ sensor prosthetic Robotic hands etc.
              </p>
              <p>
                P & O International prime focus is to prepare physically
                disabled persons to live normal life and compete with the common
                people in day-to-day life.
              </p>
            </div>
          </div>

          <div className="footer__linksWrap-list">
            <h4 className="footer__linksWrap-listHeading">About Us</h4>
            <div className="footer__linksWrap-listLinks --links">
              <a href="/">Home</a>
              <a href="/about-us">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/photos">Gallery</a>
              <a href="/Terms">Terms & Conditions</a>
            </div>
          </div>

          <div className="footer__linksWrap-list">
            <h4 className="footer__linksWrap-listHeading">Services</h4>
            <div className="footer__linksWrap-listLinks --links">
              <a href="/Disclaimer">Disclaimer</a>
              <a href="/Privacy">Privacy Policy</a>
              <a href="#">Advance Search</a>
              <a href="#">Suppliers</a>
              <a href="#">Our Branches</a>
            </div>
          </div>

          <div className="footer__linksWrap-list">
            <h4 className="footer__linksWrap-listHeading">Contact Us</h4>
            <div className="footer__linksWrap-listLinks --links">
              <p>
              O-61, Ground Floor, Beside  Mother  Dairy
              Near  Vinobapuri  Metro Station Gate  Number - 1,
              Lajpat  Nagar  2 , New Delhi - 110024
              </p>
              <p>Email: info@pointernational.in</p>
              <p>Toll-Free: +91 8881788788, Whatsapp No: +91 88003 93472</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>P&O International © 2024. All Rights Reserved</p>
        </div>
      </footer>
    );
};

export default Footer;
