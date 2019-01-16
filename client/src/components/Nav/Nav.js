import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './Nav.css';

const Nav = (props) => {
    return (
        <Navbar brand='Tatu' right>
        {props.name !== '' ? (
            <div>
                <NavItem>Welcome {props.name}!</NavItem>
                <NavItem onClick={props.handleLogout}>Logout</NavItem>
            </div>
            ) : (
            <NavItem>Welcome!</NavItem>  
            )   
        }
        </Navbar> 
    );
};

export default Nav;