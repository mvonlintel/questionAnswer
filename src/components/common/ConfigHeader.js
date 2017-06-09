import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import ConfigHeader from '../common/ConfigHeader';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/" activeClassName="active" className="">Answer Questions</IndexLink></li>
                        <li><Link to="/home" activeClassName="active" className="">Edit Questions</Link></li>
                        <li><Link to="/config" activeClassName="active" className="">Add Question</Link></li>
                    </ul>
                </nav>
        </div>
        
    );
}

export default Header;