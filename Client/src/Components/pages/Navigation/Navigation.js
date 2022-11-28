import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Navigation.css"
import {useNavigate} from "react-router-dom"

function Navigation() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const test = () => {
    navigate("/login");
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="primary">
      <Container>
        <Link to="/dashboard" className="links">
          <strong>Sports Management System</strong>
        </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
           <Nav>        
            <Link to="/bookslot" className="links">
              Courts
            </Link>
            <Link to="/issueequiments" className="links">
              Equipments
            </Link>
            <Link to="/emergency" className="links">
              Emergency
            </Link>
            <Link to="/profile" className="links">
              Profile
            </Link>
            {/* <Link onClick={logout} className="links">
              Logout
            </Link> */}

            <button onClick={logout} className="logout links">Logout</button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;