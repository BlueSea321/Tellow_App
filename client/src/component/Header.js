import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";

import { useLangContext } from "../context/langContext";
import { useAuthContext } from "../context/authContext";
import "../styles/header.css";

export function Header() {
  const navigate = useNavigate();
  const { isLogin, role } = useAuthContext();
  const { langData, setLanguage, language } = useLangContext();
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const onChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const searchPhoneNumber = async (e) => {
    e.preventDefault();
    navigate(`/num/${phoneNumber}`);
  };

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
            {isLogin ? (
              <Nav.Link href="/logout">{langData.component.header.logout}</Nav.Link>
            ) : (
              <Nav.Link href="/login">{langData.component.header.login}</Nav.Link>
            )}

            {role ? (
              role === "admin" ? (
                <Nav.Link href="/adminarea">{langData.component.header.adminarea}</Nav.Link>
              ) : (
                <Nav.Link href="/userarea">{langData.component.header.userarea}</Nav.Link>
              )
            ) : (
              ""
            )}

            <NavDropdown
              title="Contact"
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
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="english">{langData.component.header.english}</option>
              <option value="italian">{langData.component.header.italian}</option>
            </Form.Select>
          </Nav>
          {
            role === 'admin' ? '' :
            <Form className="d-flex" onSubmit={(e) => searchPhoneNumber(e)}>
            <Form.Control
              type="number"
              placeholder={langData.component.header.placeHolder}
              value={phoneNumber}
              onChange={(e) => onChangeHandler(e)}
              className="me-2 border-0"
              aria-label="Search"
              required
            />
            <Button type="submit" variant="success" className="search-btn">
              <FaSearch className="search-icon" />
            </Button>
          </Form>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
