import React from 'react';
//import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = props =>

    <footer class="footer-default">
        <div class="container">
            <div class="row">
                <div class="footerleft">
                    <ul class="list">
                        <li>
                            <a href="/" target="_self">How it works</a>
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
                            <a href="#postjobs" target="_self">Post Job</a>
                        </li>
                        <li>
                            <a href="https://trello.com/b/psY4OtSx/final-project" target="_self">Trello Board</a>
                        </li>
                        <li>
                            <a href="#featured" target="_self">Find Jobs</a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="row2">
                <div className="col-md-12">
                    <div className="social">
                        <div className="col-md-12">
                            <a href="https://www.linkedin.com/">
                                <i className="fa fa-linkedin fa-2x">
                                </i></a>
                                <a href="https://github.com/brittmoni/Freelance-A-Lot">    
                            <i className="fa fa-github fa-2x"></i></a>
                            <a href="https://trello.com/b/psY4OtSx/final-project">
                            <i className="fa fa-trello fa-2x"></i></a>
                            <br></br>
                            <div class="copyright">
                                © 2019 Freelance-A-Lot </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </footer>

export default Footer;