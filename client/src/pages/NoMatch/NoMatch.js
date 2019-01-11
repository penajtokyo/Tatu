import React from 'react';
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div className='container'>
            <h1>404 Page Not Found</h1>
            <p><Link to='/'>Go to Tatu home</Link></p>
        </div>
    );
};

export default NoMatch;