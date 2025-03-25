import { createRoot } from "react-dom/client";
import Main from "./Main";
import MainHeader from "./components/MainHeader";
import MainHeader from "./components/MainHeader";

// import form the react router dom 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


let router = createBrowserRouter([
  {
    path: "/",
    element: <Main />

  },
  {

    path: '/header',
    element: <MainHeader />
  }
]);

// function MainApp() {
//   return (
//     <>
//       <Main />
//     </>
//   );
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a React root

root.render(

  <RouterProvider router={router} />
); // Now render the app
