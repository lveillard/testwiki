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
  DropdownItem } from 'reactstrap';

  import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import SideBar from '../Sidebar/Sidebar';



class SubHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Navbar className="Header-sub py-1 pr-4" >
      <Nav className="mr-auto" navbar>
       
      <Dropdown size="sm" className="" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
          <DropdownMenu color="success">
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </Nav>
      <Nav className="ml-auto" navbar>
      <form class="form-inline my-0 my-lg-0">
          <Input className="form-control mr-sm-2" type="search" name="search" id="Buscador" placeholder="Search" />
          <Button  style={{color:"#2980b9", borderColor:"#2980b9"}} className="hover-azul btn btn-outline-success my-2 my-sm-0 d-none d-sm-block " type="submit"> Buscar </Button>
        </form>
   </Nav>
      </Navbar>
    );
  }
}
export default SubHeader;