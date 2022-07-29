import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home"
import { publicRoutes } from "./Routes/PublicRoutes";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
          }
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
