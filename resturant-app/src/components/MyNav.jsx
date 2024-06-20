import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiMeal } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

export default function MyNav() {
  const cartCount = useSelector((state) => state.cart.items.length);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4 text-danger">
            <GiMeal className="service-icon fs-1 logo me-2 mb-2" />
            FOODER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"
                }
              >
                Contact
              </NavLink>
              <Link to="/cart" className="nav-link bg-transparent position-relative me-2">
                <i className="bi-cart"></i>
                <div className="cart-counter">{cartCount}</div>
              </Link>
              <Link to="/wishlist" className="nav-link bg-transparent position-relative me-2">
                <i className="bi-heart"></i>
                <div className="wishlist-counter">{wishlistCount}</div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
