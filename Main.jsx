import "./style.css";
import React from "react";
import Counter from "./components/Counter";
import RohitKing from "./components/RohitKing";
import Toggle from "./components/Toggle";
import TodoList from "./components/TodoList";
import MainHeader from "./components/MainHeader";
import SecondElement from "./components/SecondElement";
import Herosection from "./components/Herosection";

import Formvalidation from "./components/Formvalidation";
function Main() {
  return (
    <>
      <main>
        <MainHeader />
        <SecondElement />
        <Herosection />
      </main>
    </>
  );
}

export default Main;
