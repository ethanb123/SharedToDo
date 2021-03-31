import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props: any) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">SharedToDo.io</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink href="/createlist">Create List</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/viewlist">View List</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Easily Create and Share ToDo Lists</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;