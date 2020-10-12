import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { VscRepo } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default class Topnav extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
        <Navbar.Brand className="text-primary pink-hover lighten-2-hover">
          <Link className="text-white text-decoration-none" to="#">
            <VscRepo />
            Notepad
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="text-secondary flex-end text-decoration-none" to="/register">
            Register
          </Link>
        </Nav>
        <Nav>
          <Link to="/login">Login</Link>
        </Nav>
      </Navbar>
    );
  }
}
