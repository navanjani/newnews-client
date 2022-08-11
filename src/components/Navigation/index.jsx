import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <Navbar className="navigation" bg="dark" variant="dark">
      <Container className="link-container">
        <Navbar.Brand className="nav-brand" as={NavLink} to="/">
          newNews()
        </Navbar.Brand>
        <Nav className="me-auto link-item-container">
          <Nav.Link className="link-item" as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="link-item" as={NavLink} to="/category">
            Category
          </Nav.Link>
          <Nav.Link className="link-item" as={NavLink} to="/search">
            Search Article
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
