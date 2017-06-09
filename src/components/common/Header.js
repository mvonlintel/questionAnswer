import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-inverse">
                <span className="navbar-brand">Answer Questions</span>
                <div className="pull-right">
                    <p className="navbar-text">
                    <Link to="/home" className="navbar-link"><span className="glyphicon glyphicon-asterisk"></span></Link>
                    </p>
                </div>
            </nav>
        </div>
    );
}

export default Header;