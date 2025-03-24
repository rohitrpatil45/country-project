import "./style.css";
import React from "react";

import MainHeader from "./components/MainHeader";
import SecondElement from "./components/SecondElement";
import Herosection from "./components/Herosection";

function Main() {
  return (
    <>
      <main className="main-conat">
        <MainHeader />
        {/* <SecondElement /> */}
        <Herosection />
      </main>
    </>
  );
}

export default Main;
