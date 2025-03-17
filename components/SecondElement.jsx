// import React, { useState } from "react";

// function SecondElement() {
//   const [menu, setmenu] = useState(false);
//   const [seleted , setselected] =useState('');
//   // console.log(selected);


//   const useclick = () => {
//     setmenu(!menu);
//     console.log("click on the menu btn")
//   };
// const selectedOption = (options) =>{
//   setselected(options);
//   console.log("selected options is " , options)
//   setmenu(false)
// }
//   return (
//     <>
//       <div className="second-main">
//         <div className="input-tag">
//           <input
//             className="input-tag"
//             // type="text"
//             placeholder="Search for the Country"
//           />
//         </div>
        
        
//         <div className="filter-element">
//           <button onClick={useclick}className="filter-btn" >Fliter by Region</button>
//   {menu &&  <div className="filter-menu">
//             <ul>

//               {["Asia" ,"Africa" , "America" , "Europe"].map( (item) =>(
//                 <li key={item} onClick={ () => selectedOption(item)}>{item}</li>
//               ))}
             
//             </ul>
//           </div>}
         
//         </div>
//       </div>
//     </>
//   );
// }

// export default SecondElement;




import React, { useState } from "react";

function SecondElement({ selected, setSelected, setSearchTerm }) { 
  const [menu, setMenu] = useState(false);

  const useClick = () => {
    setMenu(!menu);
  };

  const selectedOption = (option) => {
    setSelected(option); 
    console.log("Selected option is", option);
    setMenu(false);
  };

  return (
    <>
      <div className="second-main">
        <div className="input-tag">
          {/* Update the search term whenever user types */}
          <input
            className="input-tag"
            type="text"
            placeholder="Search for the Country"
            onChange={(e) => setSearchTerm(e.target.value)} // <- This is important
          />
        </div>
        
        <div className="filter-element">
          <button onClick={useClick} className="filter-btn">Filter by Region</button>
          {menu && (
            <div className="filter-menu">
              <ul>
                {["Asia", "Africa", "Americas", "Europe"].map((item) => (
                  <li key={item} onClick={() => selectedOption(item)}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SecondElement;

