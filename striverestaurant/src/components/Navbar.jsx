import { Container, Navbar, Nav } from "react-bootstrap";

const MyNavbar = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="mx-2" href="#home">
                {props.pages[0]}
              </Nav.Link>
              <Nav.Link className="mx-2" href="#link">
                {props.pages[1]}
              </Nav.Link>
              <Nav.Link className="mx-2" href="#link">
                {props.pages[2]}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
