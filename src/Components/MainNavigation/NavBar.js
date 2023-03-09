import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../Authentication/auth-context";

const NavBar = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => authCtx.logout();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/home" className="nav-link">
              HOME
            </NavLink>
            <NavLink to="/store" className="nav-link">
              STORE
            </NavLink>
            <NavLink to="/about" className="nav-link">
              ABOUT
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              CONTACT US
            </NavLink>
          </Nav>
          {location.pathname === "/store" && (
            <Button variant="primary" onClick={toggleCart}>
              CART-{cartItems.length}
            </Button>
          )}
          {isLoggedIn && (
            <Button variant="primary" onClick={logoutHandler}>
              Logout
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
