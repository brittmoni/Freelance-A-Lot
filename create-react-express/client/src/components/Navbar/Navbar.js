import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


// depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
    <nav className="navbar navbar-default">
        <div className="container-fluid">

            {/* Logo */}
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                    Freelance-A-location
                </Link>
            </div>

            <ul className="nav navbar-nav">

                <li
                    className={
                        window.location.pathname === "/" ||
                            window.location.pathname === "/howItWorks"
                            ? "active"
                            : ""
                    }
                >
                    <Link to="/">How it works</Link>
                </li>

                <li
                    className={window.location.pathname === "/disconect" ? "active" : ""}
                >
                    <Link to="/logIn">Log In</Link>
                </li>

                <li className={window.location.pathname === "signUp" ? "active" : ""}>
                    <Link to="/signUp">Sign up</Link>
                </li>

                <li className={window.location.pathname === "postJob" ? "active" : ""}>
                    <Link to="/postJob">Post Job</Link>
                </li>

            </ul>
        </div>
    </nav>


export default Navbar;
