import React from "react";

// import the component form the component folder to set the footer by default 
import MainHeader from "../MainHeader";


// import form the react router dom , the outlet hooks for the default header  in the top 
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <MainHeader />
    <Outlet />

   
    </>
  );
}

export default Layout;
