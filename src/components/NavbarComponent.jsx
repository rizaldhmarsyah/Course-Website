import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"; //Memanggil komponen react bootstrap yang digunakan

import { navLinks } from "../data/index"; //Menanggil API (NavLinks) yang ada di dalam data/index.js
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else setChangeColor(false);
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className="position-fixed">
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Course.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {/* Fungsi map adalah memecah element yang ada didalam API NavLinks */}
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    {/* Fungsi key adalah menentukan kata kunci API tersebut, contoh disini (id) */}
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
