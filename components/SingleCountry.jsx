// import the all componneats
import React from "react";
import MainHeader from "./MainHeader";
import "./Singlepage.css";

function SingleCountry() {
  return (
    <>
  
      <div className="main-container-singleCountry">
        <button className="back-btn">Back to Home</button>
        <div className="Page-container">
          <div className="image-container">
            <img
              className="image-tag"
              src="https://flagcdn.com/af.svg"
              alt="country-image"
            />
          </div>

          <div className="country-details">
            <div className="detail-one details">
              <h2>{}</h2>
              <p>native name</p>
              <p>population : {}</p>
              <p>Region : {}</p>
              <p>Sub Region : {}</p>
            </div>

            <div className="detail-two details">
              <p>Top level Domain : {}</p>
              <p>Currencies : {}</p>
              <p>Language : {}s</p>
              <p>Capital : {}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCountry;
