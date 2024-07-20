import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

//Styles
import "./styles.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <MDBRow className="footer-row">
        <MDBCol className="footer-hire-section">
          <div className="footer-hire-box">
            <a href="mailto:birkanmalkoc0@gmail.com?subject=We%20Want%20To%20Contact%20You&body=Hi%2C%20Birkan">
              Contact
            </a>
          </div>
        </MDBCol>
        <MDBCol className="footer-cv-section">
          <div className="footer-cv-box">
            <a href="https://emerald-callie-80.tiiny.site" download>
              Download CV
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Footer;
