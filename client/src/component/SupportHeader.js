import React from "react";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhoneAlt } from "react-icons/fa";
import { useLangContext } from "../context/langContext";

import "../styles/header.css";

export function SupportHeader() {
  const { langData, setLanguage } = useLangContext();
  return (
    <Navbar className="navbar-style" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="header-logo">
          <FaPhoneAlt className="logo-svg" />
          <Image
            src="https://www.tellows.com/images/logo_tel.svg"
            className="logo-image"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown
              title="Support"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/contact">
              {langData.component.header.contact}
              </NavDropdown.Item>
              <NavDropdown.Item href="/privacy-policy">
              {langData.component.header.privacy}
              </NavDropdown.Item>
            </NavDropdown>
            <Form.Select
              aria-label="Default select example"
              className="select-lang border-0"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">{langData.component.header.english}</option>
              <option value="it">{langData.component.header.italian}</option>
            </Form.Select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
