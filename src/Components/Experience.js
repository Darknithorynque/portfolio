import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";

//Icon
import experienceIcon from "../Assets/codeIcon.png";

//Data
import data from "./experience.json";

function Experience(props) {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    setExperienceData(data);
  }, []);
  return (
    <div>
      <MDBRow className="experience-container-row">
        <div className="experience-title">Experience</div>
        {}
        {experienceData.map((detail, i) => {
          return (
            <>
              {detail.rightLeft ? (
                <div
                  style={{ display: "flex" }}
                  className="experience-box-container"
                >
                  <MDBCol className="experience-text-col">
                    <div className="experience-text-section">
                      <h4>{detail.companyName}</h4>
                      <p className="history">{detail.workTime}</p>
                      <p>{detail.details}</p>
                    </div>
                    <img
                      className="experience-icon"
                      src={experienceIcon}
                      alt="tag"
                    />
                  </MDBCol>
                  <MDBCol
                    className="experience-line"
                    style={{
                      height: "auto",
                      width: "2px",
                      backgroundColor: "red",
                    }}
                  />

                  <MDBCol
                    className="experience-space"
                    style={{ width: "50%" }}
                  />
                </div>
              ) : (
                <div
                  style={{ display: "flex" }}
                  className="experience-box-container"
                >
                  <MDBCol
                    className="experience-space"
                    style={{ width: "50%" }}
                  />
                  <MDBCol
                    className="experience-line"
                    style={{
                      height: "auto",
                      width: "2px",
                      backgroundColor: "red",
                    }}
                  />
                  <MDBCol className="experience-text-col">
                    <div className="experience-text-section-right">
                      <h4>{detail.companyName}</h4>
                      <p className="history">{detail.workTime}</p>
                      <p>{detail.details}</p>
                    </div>
                    <img
                      className="experience-icon-right"
                      src={experienceIcon}
                      alt="tag"
                    />
                  </MDBCol>
                </div>
              )}{" "}
            </>
          );
        })}
      </MDBRow>
    </div>
  );
}

export default Experience;
