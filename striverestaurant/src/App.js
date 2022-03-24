import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar pages={["Home","Registration","Browse"]} />
        <Routes>
        <Route path="/" element={<LatestRelease/>}  />
        <Route path="/registration" element={<Registration/>}  />

        <Route path="*" element = {<div>404 not found</div>}  />

        
          
        </Routes>
        <MyFooter/>
      </BrowserRouter>
    </>
  );
}

export default App;
