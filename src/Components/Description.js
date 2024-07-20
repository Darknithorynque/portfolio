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
              My full name is Birkan Arda Malkoc. I am a recent graduate with a
              Bachelor's degree in Computer Engineering from Kocaeli University
              (2024). As a Junior Software Engineer, my primary focus is on
              backend engineering, with expertise in Java Spring Boot. I also
              possess a solid understanding of frontend technologies, including
              React.
            </MDBTypography>
            <MDBTypography className="about-part-second">
              I have roughly 1.5 years professional work experience. I had
              studied as an intern and complited my mandatory summer internship
              in HTMLTEK(2 months) and Argenova(1 months) company; then I worked
              as a part-time support engineer at Vaga Company in Gebze Bilisim
              Vadisi 4 months. Currently I am working as a Software Engineer in
              a Fintech company named Finartz for 1 years.
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
}
