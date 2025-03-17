import React, { useState } from "react";

function SecondElement() {
  const [menu, setmenu] = useState(false);

  const useclick = () => {
    setmenu(!menu);
    console.log("first")
  };
  return (
    <>
      <div className="second-main">
        <div className="input-tag">
          <input
            className="input-tag"
            type="text"
            placeholder="Search for the Country"
          />
        </div>

        <div className="filter-element">
          <button onClick={useclick}className="filter-btn" >Fliter by Region</button>
{menu &&  <div className="filter-menu">
            <ul>
              <li>rohit</li>
              <li>rohan</li>
              <li>raj</li>
              <li>kaushik</li>
            </ul>
          </div>}
         
        </div>
      </div>
    </>
  );
}

export default SecondElement;
