import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Plus, Wallet, User, Home } from "lucide-react";

export default function HomeNavbar() {
  const handleLogout = () => {
    // Clear user data / token logic here
    console.log("User logged out");
  };

  return (
    <Navbar expand="lg" bg="" variant="light" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Spenddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
             <Home size={16} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/expense">
              <Plus size={16} className="me-1" />
              Expenses
            </Nav.Link>
            <Nav.Link as={Link} to="/income">
              <Wallet size={16} className="me-1" />
              Income
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<User size={16} className="me-1" />}
              id="user-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
