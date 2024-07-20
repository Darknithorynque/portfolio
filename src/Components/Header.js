import { MDBTypography } from "mdb-react-ui-kit";
import React from "react";

//styles
import "./styles.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <h3>PORTFOLIO</h3>
        <MDBTypography>
          Hi guys, Welcome to my portfolio. I am B on the other hand Birkan Arda
          Malkoc. I am 23 years old Jr. Software Engineer focused on Backend
          Development. Currently my location is in Kocaeli. Let's take a moment
          to explore my portfolio.
        </MDBTypography>
      </div>
    </>
  );
}
