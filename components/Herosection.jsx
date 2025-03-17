import React from "react";
import data from "../data.json";

function Herosection() {
  return (
    <>
      <div className="hero-div">
        {data.map((item, index) => (
               <div  key={index}  className="container">
               <img src={item.flag}alt="countery-image" />
               <div key={index} className="div-data">
               <p>Name: { item.name}</p>
               <p>Population: { item.population}</p>
               <p>Region :{ item.region}</p>
               </div>
             </div>

        ))}
     
      
      </div>
    </>
  );
}

export default Herosection;
