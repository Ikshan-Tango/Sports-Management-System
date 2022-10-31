import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Navigation.css"
function Navigation() {

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
            <Link to="/precautions" className="links">
              Emergency
            </Link>
            <Link to="/profile" className="links">
              Profile
            </Link>
            <Link to="/" className="links">
              Logout
            </Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;