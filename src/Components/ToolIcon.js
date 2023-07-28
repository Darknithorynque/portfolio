import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

//Styles
import "./styles.css";

//Icons
import instagram from "../Assets/insta.png";
import linkedIn from "../Assets/linkedin.png";
import gmail from "../Assets/gmail.png";
import gitHubPic from "../Assets/github.png";
import vanilia from "../Assets/vanilia.jpeg";
import reactPic from "../Assets/react.png";
import reactNative from "../Assets/react-native.webp";
import nextJs from "../Assets/next.webp";
import mdbPic from "../Assets/mdb.jpeg";
import jira from "../Assets/jira.webp";
import javascriptPic from "../Assets/javascrit.png";

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
    [reactPic, "https://react.dev/"],
    [vanilia, "http://vanilla-js.com/"],
    [reactNative, "https://reactnative.dev/"],
    [nextJs, "https://nextjs.org/"],
    [mdbPic, "https://mdbootstrap.com/docs/react/components/cards/"],
    [
      javascriptPic,
      "https://www.google.com/search?q=js&rlz=1C5CHFA_enTR1045TR1045&oq=js&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYOzIJCAQQIxgnGIoFMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEHMjkyajBqNKgCALACAA&sourceid=chrome&ie=UTF-8",
    ],
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
