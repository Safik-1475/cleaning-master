import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { publicRoutes } from "./Routes/PublicRoutes";
import PrivateRoutes from './Authentication/PrivateRoutes';
import { privateRoutes } from "./Routes/PrivateRoutes";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
          }
          <Route element={<PrivateRoutes />}>
            {
              privateRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={Component} />))
            }
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
