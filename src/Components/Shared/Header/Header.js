import logo from "../../../images/logoLight.png";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./Header.css";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };

  if (user) {
    console.log(user);
  }

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        className="nav-bar"
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img className="header-logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={NavLink} to="/add">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/manage">
                    Manage Inventory
                  </Nav.Link>
                </>
              )}
              {user ? (
                <>
                  <NavDropdown
                    title={user?.displayName || "Profile"}
                    id="basic-nav-dropdown"
                    className="user-logout"
                  >
                    <NavDropdown.Item as={NavLink} to="/myItems">
                      My Items
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={handleLogOut}
                      className="btn-logout"
                    >
                      Logout
                    </NavDropdown.Item>
                    {/* <button onClick={handleLogOut} className="btn-logout">
                      Logout
                    </button> */}
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/login">
                    <Button variant="light">Login</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
