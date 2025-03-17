import { createRoot } from "react-dom/client";
import Main from "./Main";
import MainHeader from "./components/MainHeader";
function MainApp() {
  return (
    <>
      <Main />
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a React root

root.render(<MainApp />); // Now render the app
