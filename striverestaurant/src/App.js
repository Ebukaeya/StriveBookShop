import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <>
      <MyNavbar pages={["Home","About","Browse"]} />
      <Welcome/>
     <LatestRelease/>
      <MyFooter/>
    </>
  );
}

export default App;
