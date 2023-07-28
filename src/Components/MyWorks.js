import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import data from "./data.json";

import pic from "../Assets/birkan (1).jpeg";

//Styles
import "./styles.css";

function MyWorks(props) {
  const [dataWorks, setDataWorks] = useState([]);
  const [dscWorkClassName, setDscWorkClassName] = useState({ id: "" });

  const dscWorkDetails = function (e, dscDetail, id) {
    console.log(id, e.target);
    if (dscDetail.length > 20 && id === e.target.id) {
      const classNameControl = document.getElementById(id).className;
      console.log(classNameControl);
      classNameControl !== "myworks-dscDetails"
        ? (document.getElementById(id).className = "myworks-dscDetails")
        : (document.getElementById(id).className = "myworks-card-dsc");

      classNameControl !== "myworks-dscDetails"
        ? (document.getElementById(id).innerHTML = dscDetail)
        : (document.getElementById(id).innerHTML =
            dscDetail.slice(0, 14) + "...");
    }
  };

  useEffect(() => {
    setDataWorks(data);
    setDscWorkClassName("myworks-card-dsc");
    console.log(data);
  }, []);

  const textLengthControl = (text) => {
    const lengthOfTxt = text.length;

    return lengthOfTxt;
  };

  return (
    <div>
      <div className="myworks-title">My Works</div>
      <div className="myworks-card-container">
        <MDBRow className="myworks-row">
          {dataWorks &&
            dataWorks.map((item, i) => {
              return (
                <MDBCol className="myworks-card" key={i}>
                  <a href={item.deploymentUrl}>
                    <img
                      className="myworks-pic"
                      src={item.pic}
                      alt={item.name}
                    />
                  </a>
                  <p
                    onClick={(e) => dscWorkDetails(e, item.dsc, item.id)}
                    id={item.id}
                    className={dscWorkClassName}
                  >
                    {textLengthControl(item.dsc) < 23
                      ? item.dsc
                      : item.dsc.slice(0, 14) + "..."}
                  </p>
                </MDBCol>
              );
            })}
        </MDBRow>
      </div>
    </div>
  );
}

export default MyWorks;
