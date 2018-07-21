import React, { Component } from 'react';
import { Button, Col,Row, Container } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  UncontrolledButtonDropdown,
  DropdownItem } from 'reactstrap';

  import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Header.css';




class SubHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  

  render() {
    return (

      <Navbar className="Header-sub py-1 pr-4" style={{maxWidth: "1100px",margin:"auto"}}  >
      <div>
        <Nav>
          <NavItem className="pr-2">
          <UncontrolledButtonDropdown>
        <DropdownToggle className="button-nav-main" size="sm">
          Large Button
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
          </NavItem>

      <UncontrolledButtonDropdown>
        <DropdownToggle className="button-nav" size="sm">
          Large Button
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Mundo</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
        
        </Nav>
      </div>
      <Nav className="mr-auto" navbar>
       

      </Nav>
      <Nav className="ml-auto" navbar>
      <form className="form-inline my-0 my-lg-0">
          <Input className="form-control mr-sm-2" type="search" name="search" id="Buscador" placeholder="Search" />
          <Button  style={{color:"#2980b9", borderColor:"#2980b9"}} className="hover-azul btn btn-outline-success my-2 my-sm-0 d-none d-sm-block " type="submit"> Buscar </Button>
        </form>
   </Nav>
      </Navbar>
    );
  }
}
export default SubHeader;