import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/Router";
import { LanguageContextProvider } from "./providers/Language";

function App() {
  return (
    <>
      <LanguageContextProvider>
        <RouterProvider router={router} />
      </LanguageContextProvider>
    </>
  );
}

export default App;
