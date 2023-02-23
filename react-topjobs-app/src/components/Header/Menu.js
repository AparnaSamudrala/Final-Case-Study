import { Link,NavLink } from "react-router-dom";
import {Nav,Navbar,Offcanvas,Container} from 'react-bootstrap'

export default function Menu() {
  return (
    <Navbar key="sm" bg="dark" expand="sm" className="" variant="dark">
      <Container fluid className="mx-5"> 
        <Link className="navbar-brand text-white fw-bold fs-4" to="/">
          <img
            src={
              ".././images/topjobslogo.png"
            }
            alt="logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top me-2"
          />
          <span style={{ verticalAlign: "middle" }}>Topjobs</span>
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-'sm'`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-'sm'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-'sm'`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-'sm'`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav  className="justify-content-end flex-grow-1 pe-3">
              
              <NavLink className="nav-link border border-1" to="/">
                HOME
              </NavLink>
              
              <NavLink className="nav-link border border-1" to="/jobs">
                JOBS
              </NavLink>
             
              <NavLink className="nav-link border border-1" to="/contact">
                CONTACT
              </NavLink>
             
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
