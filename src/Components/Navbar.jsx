import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import {Link} from "react-router"


function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Líverval</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/smartphones">smartphones</Nav.Link>
            <Nav.Link as={Link} to="/category/notebook">notebook</Nav.Link>
          </Nav>
          <Link to="/cart">
           <CartWidget />
          </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;