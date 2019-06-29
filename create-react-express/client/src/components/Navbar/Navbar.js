import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom';
import "./Navbar.css";
//import logo from '../../img/brand.png';
import * as firebase from "../../../../node_modules/firebase"
import Login from "../../pages/Login"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


// depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    return (
        <div className="navbar navbar-expand-lg navbar-light fixed-top animated fadeIn delay-1s">
            <div class="container">
                <div className="navbar-brand"><a href="/home"><img src="https://i.imgur.com/xzUGBaC.jpg" className="brand" alt="Logo" /></a> </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#HowItWorks">Find Jobs
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/jobs">Log In</a>
                        </li>

                        <li class="nav-item active">
                            <a className="nav-link" href="/">
                                Post Job
                            </a>
                        </li>

                       

                        <li class="nav-item active">
                            <a className="nav-link" href="/postjob">
                                Profile
                            </a>
                        </li>

                        <li class="nav-item">
                            <button onClick={() => firebase.auth().signOut()} type="button" id="signOut" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Sign out
                                {/* href={<Link to = "Login" />} for direct path back to sign in */}
                            </button>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div id="welcomeText"><h2>{"Welcome " + sessionStorage.getItem("freelancerName")}  <img src={sessionStorage.getItem("freelancerPic")} width="50px" height="50px" /></h2></div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
