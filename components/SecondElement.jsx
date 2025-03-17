import React, { useState } from "react";

function SecondElement() {
  const [menu, setmenu] = useState(false);
  const [seleted , setselected] =useState('');

  const useclick = () => {
    setmenu(!menu);
    console.log("click on the menu btn")
  };
const selectedOption = (options) =>{
  setselected(options);
  console.log("selected options is " , options)
  setmenu(false)
}
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

              {["Asia" ,"Africa" , "America" , "Europe"].map( (item) =>(
                <li key={item} onClick={ () => selectedOption(item)}>{item}</li>
              ))}
             
            </ul>
          </div>}
         
        </div>
      </div>
    </>
  );
}

export default SecondElement;
