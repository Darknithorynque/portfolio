import React from "react";
import Header from "./Components/Header";
import Description from "./Components/Description";
import ToolIcon from "./Components/ToolIcon";
import MyWorks from "./Components/MyWorks";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Modal from "./Components/modal";

function App() {
  return (
    <>
      <Header />
      <Modal />
      <div style={{ paddingInline: "150px" }}>
        <Description />
        <ToolIcon />
        <MyWorks />
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default App;
