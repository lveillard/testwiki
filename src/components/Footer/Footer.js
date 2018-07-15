import React, { Component } from 'react';
import './Footer.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <Navbar dark className="fixed-bottom App-footer">
      <p> Footer </p>
      </Navbar>
    );
  }
}
export default Footer;