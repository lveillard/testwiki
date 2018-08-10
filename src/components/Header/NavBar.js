import React from 'react';
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

export default class  extends React.Component {
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



			
        <Navbar className=" " dark expand="sm" style={{}} >
          <Navbar className="fixed-top " dark expand="sm" style={{maxWidth: "1400px",margin:"auto"}}>
          <NavbarBrand  className="mx-auto" href="/">Wikiverse</NavbarBrand>
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
          </Collapse>
          </Navbar>
        </Navbar>

    );
  }
}
