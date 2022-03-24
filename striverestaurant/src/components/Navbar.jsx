import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} className="mx-2" href="#home">
               <p className="nav-link"> {props.pages[0]}</p>
              </Link>
             
              <Link to={"/registration"} className="mx-2" href="#link">
                <p className="nav-link">{props.pages[1]}</p>
              </Link>
              {/* <Nav.Link className="mx-2" href="#link">
                {props.pages[2]}
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
