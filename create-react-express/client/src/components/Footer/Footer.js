import React from 'react';
//import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = props =>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <div className="footerleft">
                        <ul className="list">
                            <li>
                                <a href="https://docs.google.com/presentation/d/1J0rytswFlt5qZL49qQ6kCm2LIFgzWBcc-45FozL5JXw/edit#slide=id.gc6f80d1ff_0_0" target="_self">Google Portfolio</a>
                            </li>
                            
                            <li data-ng-click="feedback()">
                                <a href="/">Log in</a>
                            </li>
                            <li data-ng-click="feedback()">
                                <a href="/profile">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footerright">
                        <ul className="list">
                            <li>
                                <a href="/postjob" target="_self">Post Job</a>
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
                <div className="col-md-2">
                    <div className="topofpage">
                        <a href="/" className="top-scroll">
                            <i class="fa fa-angle-up fa-3x"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="social">
                        <a href="https://www.linkedin.com/">
                            <i className="fa fa-linkedin fa-2x">
                            </i></a>
                        <a href="https://github.com/brittmoni/Freelance-A-Lot">
                            <i className="fa fa-github fa-2x"></i></a>
                        <a href="https://trello.com/b/psY4OtSx/final-project">
                            <i className="fa fa-trello fa-2x"></i></a>
                        <hr></hr>
                        <div class="copyright">
                            © 2019 Freelance-A-Lot </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
export default Footer;