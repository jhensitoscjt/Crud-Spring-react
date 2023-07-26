import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home01 from "./pages/Home01";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
// import './style/estilos.css';
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarWrapper />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home01" element={<Home01 />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

// NavbarWrapper es un componente independiente que envuelve el Navbar
const NavbarWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  // Si el usuario está en la página Home, no mostrar el Navbar
  if (isHomePage) {
    return null;
  }

  // Si el usuario está en cualquier otra página, mostrar el Navbar
  return <Navbar />;
};

export default App;