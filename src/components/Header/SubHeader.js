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
import { catList } from '../../services/articuloObj';




class SubHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  
  

  render() {


    const listaCategorias = 
    this.props.categorias.map(y => (
      <div className="cat" key={y.id}>
      <DropdownItem 
      onClick={()=>
      y.id ? 
      this.props.updateFS(y.id, "Categoria") :
      this.props.updateFS("","Categoria")            }>
      {y.Nombre}</DropdownItem>
      </div>
    ));


    return (
      <div >
      <div className="Header-sub " style={{height: "34px"}}>
      
      <Navbar className="Header-sub py-1 pl-0 pr-3" style={{height: "35px", maxWidth: "1400px",marginRight: "auto",marginLeft:"auto", position:"fixed", flexWrap: "nowrap"}}  >
        <Nav style={{width:"80%",flexWrap: "nowrap"}}>
          {/*<NavItem className="pr-2">
          <UncontrolledButtonDropdown>
        <DropdownToggle className="button-nav-main" size="sm">
          Mundo
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <FontAwesomeIcon  className="floater button-nav my-3 mr-1" style={{}} icon="angle-right" />

          </NavItem>
      */}
      <NavItem className="pl-2 pt-2">
      <UncontrolledButtonDropdown>
        <DropdownToggle className="button-nav" size="sm">
          <a>Mundo{" "}</a>
        <FontAwesomeIcon  className="" style={{}} icon="angle-right" />

        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Mundo</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      </NavItem>

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

      <FontAwesomeIcon  className="floater button-nav my-3 mr-1" style={{}} icon="angle-right" />
      <NavItem className="pt-2">
      <UncontrolledButtonDropdown>
        <DropdownToggle className="button-nav" size="sm">
          Categoría
        </DropdownToggle>
        <DropdownMenu>
          {listaCategorias}
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      </NavItem>
      <FontAwesomeIcon  className="floater button-nav my-3 mr-1" style={{}} icon="angle-right" />
      <div className="cy" ><a className="dy" >{this.props.activeArticle.Titulo}</a></div>
        
      </Nav>

      <Nav className=" d-none d-md-block" navbar>
      <NavItem>
      <form style={{flexFlow: "nowrap"}} className="form-inline">
          <Input style={{fontSize: "0.85rem", padding:"0rem .75rem"}} className="form-control" type="search" name="search" id="Buscador" placeholder="Search..." />
          <Button  style={{color:"#2980b9", borderColor:"transparent"}} className="hover-azul btn btn-outline-success" type="submit"> 						<FontAwesomeIcon className= "ca" icon="search" />
 </Button>
        </form>
        </NavItem>
   </Nav>
      </Navbar>
      </div>
      </div>
    );
  }
}
export default SubHeader;