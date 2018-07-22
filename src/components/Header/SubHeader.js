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
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
      <div >
      <div className="Header-sub " style={{height: "47px"}}>

      <Navbar className="Header-sub py-1 pl-0 pr-3" style={{height: "47px", maxWidth: "1400px",marginRight: "auto",marginLeft:"auto", position:"fixed", flexWrap: "nowrap"}}  >
      <div>
        <Nav>
          <NavItem className="pr-2">
          <UncontrolledButtonDropdown>
        <DropdownToggle className="button-nav-main" size="sm">
          Mundo
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
          </NavItem>
          <FontAwesomeIcon  className="floater button-nav my-3 mr-1" style={{}} icon="angle-right" />
      <NavItem className="pl-2 pt-2">
      <UncontrolledButtonDropdown>
        <DropdownToggle className="button-nav" size="sm">
          Vista
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Mundo</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      </NavItem>
        
        </Nav>
      </div>
      <Nav className="mr-auto" navbar>
       

      </Nav>
      <Nav className="ml-auto d-none d-sm-block" navbar>
      <form className="form-inline  my-0 my-lg-0">
          <Input className="form-control  mr-4" type="search" name="search" id="Buscador" placeholder="Search" />
          <Button  style={{color:"#2980b9", borderColor:"#2980b9"}} className="hover-azul btn btn-outline-success my-2 pl-2 ml-2" type="submit"> Buscar </Button>
        </form>
   </Nav>
      </Navbar>
      </div>
      </div>
    );
  }
}
export default SubHeader;