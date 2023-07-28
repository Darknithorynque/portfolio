import { MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";

//Assets
import BirkanPic from "../Assets/portfolio-birkan-img.png";

//Styles
import "./styles.css";

export default function Description() {
  return (
    <>
      <MDBRow className="description-container">
        <MDBCol md={4} className="dsc-img-container">
          <img className="description-image" src={BirkanPic} alt="Birkan" />
        </MDBCol>
        <MDBCol md={8} className="dsc-text-container">
          <div>
            <h4>Hi! I'm Birkan</h4>
            <MDBTypography className="about-part-first">
              My full name is Birkan Arda Malkoc, senior student in Kocaeli
              University, Computer Engineering Department. My profession is
              Frontend Web/Mobile development. Currently my stacks are React JS,
              Next JS , Jquery, React Native, Javascript, Vanilia JS and some
              CSS libraries such as Semantic UI and Bootstrap.
            </MDBTypography>
            <MDBTypography className="about-part-second">
              I have 7 months professional work experience. I had studied as an
              inten in HTMLTEK(2 months) and Argenova(1 months) company; then I
              worked as a Junior Developer at Vaga Company in Gebze Bilisim
              Vadisi 4 months{" "}
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
}
