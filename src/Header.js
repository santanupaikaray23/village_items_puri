import React from 'react';
import {Link} from 'react-router-dom';
import {Mail,Person} from "@material-ui/icons";

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link class="navbar-brand" to="/">      
                <Person className="icon" />
        <span>9124171100</span> &nbsp;<Mail className="icon" />
        <span>info@gkctinfo.in</span></Link>
                    {/* <div className="itemContainer">
        <Person className="icon" />
        <span>+91-8917310896</span>
     </div> */}
     {/* <div className="itemContainer">
        <Mail className="icon" />
        <span>santanupaikaray1996@gmail.com</span>
     </div> */}
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/internship-training">Internship & Training</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;