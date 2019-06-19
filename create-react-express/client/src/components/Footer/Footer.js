import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = props =>

    <footer class="footer-default">
        <div class="container">
            <div class="row">
            <div class="footerleft">
                <ul class="list">
                    <li>
                        <a href="/info/about/" target="_self">How it works</a>
                    </li>
                    <li>
                        <a href="/signup/" target="_self">Sign Up</a>
                    </li>
                    <li data-ng-click="feedback()">
                        <a href="javascript:">Log in</a>
                    </li>
                </ul>
</div>
<div class="footerright">
                <ul class="list">
                    <li>
                        <a href="..." target="_self">Post Job</a>
                    </li>
                    <li>
                        <a href="..." target="_self">Trello Board</a>
                    </li>
                    <li>
                        <a href="..." target="_self">Find Jobs</a>
                    </li>
                </ul>

            </div>
            </div>
            <div className="row">
               <div className="social">
                    <div className="col-md-12">
                        <i className="fa fa-linkedin fa-2x"></i>
                        <i className="fa fa-github fa-2x"></i>
                        <i className="fa fa-envelope-square fa-2x"></i>
                        <br></br>
                        <div class="copyright">
                        © 2019 Freelance-A-Lot </div>
                </div>
                        </div>
                       </div> 
                    
                </div>
    </footer>




export default Footer;