import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
  import './Header.css';
  import { auth } from '../../firebase'


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
       <div className="NavBar bb ">



        <Navbar className=" " dark expand="sm" style={{}} >
 
          <Navbar className="fixed-top " dark expand="sm" style={{maxWidth: "1400px",margin:"auto"}}>
          <NavbarBrand  className="" href="/">Wikiverse</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Opciones</NavLink>
              </NavItem>
              {/*<NavItem>
              <NavLink tag={Link} to="/login">login</NavLink>
              </NavItem>*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.props.currentTeam.Name}
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    LogOut
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
            </Nav>
            <Nav>
            <NavItem>
                     <UncontrolledDropdown nav inNavbar style={{maxHeight:"60px",objectFit: "contain"}}>
              <DropdownToggle nav style={{cursor: "pointer"}}>
                
                {this.props.user&& <img style={{height:"36.4px",borderRadius: "50%"}} src={this.props.user&&this.props.user.photoURL} alt="Italian Trulli" />}
                <DropdownMenu  right>
                <DropdownItem  className="ca" header style={{cursor: "default",textAlign:"center"}}>
                {this.props.user&&this.props.user.displayName}
                  </DropdownItem>
                  <DropdownItem  header style={{cursor: "default"}}>
                {this.props.user&&this.props.user.email}
                  </DropdownItem>
                  <DropdownItem style={{textAlign:"center"}} onClick={( ) => auth.signOut()}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </DropdownToggle>
                </UncontrolledDropdown>
                </NavItem>
             </Nav>
          </Collapse>

          </Navbar>
          
        </Navbar>
        </div>

    );
  }
}
export default Header;