import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header () {

    return (
        <Jumbotron>
            <h1>Hello, world!</h1>
            
            <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
            
            </p>
            
            <p>
                <Link to='/home' className="btn btn-primary">Home </Link>
                <Link to='/projects' className="btn btn-info">Projects </Link>
                <Link to='/contact' className="btn btn-success">Contact Me!</Link>
            </p>
        </Jumbotron>
    )
};

export default Header;