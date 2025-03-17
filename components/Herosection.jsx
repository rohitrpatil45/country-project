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
  const [selected, setSelected] = useState(''); // State for selected region

  // Filter the data based on the selected region
  const filteredData = selected ? data.filter(item => item.region === selected) : data;

  return (
    <>
      {/* Passing `selected` and `setSelected` as props */}
      <SecondElement selected={selected} setSelected={setSelected} /> 
      
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
