import { createRoot } from "react-dom/client";
import Main from "./Main";
import MainHeader from "./components/MainHeader";
import MainHeader from "./components/MainHeader";
import Layout from "./components/layouts/Layout";
import SingleCountry from "./components/SingleCountry";
import Herosection from "./components/Herosection";

// import form the react router dom 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Herosection from "./components/Herosection";


let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,  // ✅ This makes `Main` the default child
        element: <Main />,
      },{
        path: '/country',
        element: <SingleCountry />
      }
    ]

  },
  
]);


const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a React root

root.render(

  <RouterProvider router={router} />
); // Now render the app



// function MainApp() {
//   return (
//     <>
//       <Main />
//     </>
//   );
// }