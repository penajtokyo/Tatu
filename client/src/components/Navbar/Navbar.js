import React from 'react';
import { Button } from 'react-materialize';
import './Navbar.css';

const Navbar = (props) => {
    //trying to keep session 
    // const sessionData = req.session.customer;
    // console.log('sessiondata', sessionData);
    // const data = props.location.state.detail;
    return (
        <nav>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo center'>Tatu</a>
                {/* {req.session.customer.loggedIn === true ? ( */}
                    <div><p>Welcome, {props.name} </p> 
                    <Button waves='light'>Logout</Button></div>
                {/* ) : ( */}
                {/* <p>Welcome!</p> */}
                {/* )} */}
            </div>
        </nav>
    );
};

export default Navbar;