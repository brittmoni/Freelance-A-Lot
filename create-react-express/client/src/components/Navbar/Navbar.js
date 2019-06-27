import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom';
import "./Navbar.css";
//import logo from '../../img/brand.png';
import * as firebase from "../../../../node_modules/firebase"
// import firebase from 'firebase';



// depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    return (
        <div className="navbar navbar-expand-lg navbar-light fixed-top animated fadeIn delay-1s">
            <div class="container">
                <div className="navbar-brand"><img src="https://i.imgur.com/xzUGBaC.jpg" className="brand" alt="Logo" /> </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#HowItWorks">How it works
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/jobs">Find Jobs</a>
                        </li>

                        <li class="nav-item active">
                            <a className="nav-link" href="/login">
                                Log in
                            </a>
                        </li>


                        <li class="nav-item active">
                            <a className="nav-link" href="/postjob">
                                Post Job
                            </a>
                        </li>

                        <li class="nav-item">
                            <button onClick={() => firebase.auth().signOut()} type="button" id="signOut" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Sign out
                            </button>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div id="welcomeText"><h1>{sessionStorage.getItem("freelancerName")}</h1><img src={sessionStorage.getItem("freelancerPic")} width="50px" height="50px"/></div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
