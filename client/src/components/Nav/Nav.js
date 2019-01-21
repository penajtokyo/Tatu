import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './Nav.css';

const Nav = (props) => {
  return (
    <Navbar brand='Tatu' right>
      {props.name !== '' ? (
        <div>
          <li><h6 className='navHeader'>Hello {props.name}!</h6></li>
          <NavItem onClick={props.handleLogout}>Logout</NavItem>
        </div>
      ) : (
        <li><h6 className='navHeader'>Welcome!</h6></li>
      )}
    </Navbar>
  );
}

export default Nav;