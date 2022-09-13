import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEnvelope, FaHouseUser,FaChessQueen } from "react-icons/fa";

const NavBarCap = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
            <FaHouseUser className="m-2" />
          </Link>
          <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
            Contacto
            <FaEnvelope className="m-2" />
          </Link>
        </Container>
        <Navbar.Brand className="mx-4">Happy Cake<FaChessQueen className="m-2"/></Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBarCap;
