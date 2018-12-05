import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <p>Blog</p>
        <Nav>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">I'm Iron Man</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contatti</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
     
          
       </div>
    );
  }
}