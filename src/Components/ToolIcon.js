import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

//Styles
import "./styles.css";

//Icons
import instagram from "../Assets/insta.png";
import linkedIn from "../Assets/linkedin.png";
import gmail from "../Assets/gmail.png";
import gitHubPic from "../Assets/github.png";
import java from "../Assets/java-logo.jpg";
import reactPic from "../Assets/react.png";
import spring from "../Assets/springboot-inner.svg";
import mysql from "../Assets/mySQL-logo.png";
import jira from "../Assets/jira.webp";
import postman from "../Assets/logo-glyph.png";

function ToolIcon(props) {
  const contactElements = [
    [instagram, "https://react.dev/"],
    [
      linkedIn,
      "https://www.linkedin.com/in/birkan-arda-malko%C3%A7-405108225/?originalSubdomain=tr",
    ],
    [gmail, "mailto:birkanmalkoc0@gmail.com"],
    [gitHubPic, "https://github.com/Darknithorynque"],
  ];
  const toolElements = [
    [java, "https://www.java.com/en/"],
    [spring, "https://spring.io/projects/spring-boot"],
    [reactPic, "https://react.dev/"],
    [mysql, "https://www.mysql.com/"],
    [postman, "https://www.postman.com/"],
    [jira, "https://www.atlassian.com/software/jira"],
  ];

  return (
    <div>
      <MDBRow className="toolSec-container">
        <MDBCol
          md={7}
          style={{ position: "relative", marginInlineEnd: "60px" }}
        >
          <div className="tools-text">Tools</div>
          <div className="tools-container">
            {toolElements.map((item) => {
              return (
                <a href={item[1]}>
                  <img className="toolIcon-icons" src={item[0]} alt="react" />
                </a>
              );
            })}
          </div>
        </MDBCol>
        <MDBCol md={5} style={{ position: "relative" }}>
          <div className="tools-text">Contact</div>
          <div className="contact-container">
            {contactElements.map((item) => {
              return (
                <a href={item[1]}>
                  <img className="toolIcon-icons" src={item[0]} alt="insta" />
                </a>
              );
            })}
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default ToolIcon;
