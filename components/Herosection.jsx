// import React from "react";
// import data from "../data.json";
// import SecondElement from "./SecondElement";

// function Herosection() {
//   return (
//     <>
//     <SecondElement />
//       <div className="hero-div">
//         {data.map((item, index) => (
//                <div  key={index}  className="container">
//                <img src={item.flag}alt="countery-image" />
//                <div key={index} className="div-data">
//                <p>Name: { item.name}</p>
//                <p>Population: { item.population}</p>
//                <p>Region :{ item.region}</p>
//                </div>
//              </div>

//         ))}
     
      
//       </div>
//     </>
//   );
// }

// export default Herosection;


import React, { useState } from "react";
import data from "../data.json";
import SecondElement from "./SecondElement";

function Herosection() {
  const [selected, setSelected] = useState(''); // For region filter
  const [searchTerm, setSearchTerm] = useState(''); // For search input

  // Filter the data based on region and search term
  const filteredData = data.filter(item =>
    (selected ? item.region === selected : true) && // Region filter
    (searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) // Search filter
  );

  return (
    <>
      <SecondElement selected={selected} setSelected={setSelected} setSearchTerm={setSearchTerm} /> 
      
      <div className="hero-div">
        {filteredData.map((item, index) => (
          <div key={index} className="container">
            <img src={item.flag} alt="country-image" />
            <div className="div-data">
              <p>Name: {item.name}</p>
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Herosection;


