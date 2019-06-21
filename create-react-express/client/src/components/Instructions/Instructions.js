import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom';
import "./Instructions.css";
//import Button from 'react-bootstrap/Button';


// depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Instructions = props =>
    <div className="how">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>
                            How it works
                        </h3>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <i class="fa fa-search"></i>
                            <hr></hr>
                            <br></br>
                            <strong>FIND</strong>
                            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                            </p>
                            <br></br>
                            <br></br>
                        </div>
                        <div class="col-md-3">
                            <i class="fa fa-window-restore"></i>
                            <hr></hr>
                            <br></br>
                            <strong>HIRE</strong>
                            <p>Browse profiles, e-mail proposals then interview top candidates. Hire a favorite and begin your
                                project.
                            </p>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="col-md-3">
                            <i className="fa fa-creative-commons-share"></i>
                            <hr></hr>
                            <br></br>
                            <strong>WORK</strong>
                            <p>Use the Freelance-a-Lot® platform to chat, share files, and collaborate from your desktop or
                                on the go.
                            </p>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="col-md-3">
                            <i className="fa fa-money-bill-wave-alt"></i>
                            <hr></hr>
                            <br></br>
                            <strong>PAY</strong>
                            <p>With Freelance-a-Lot® Protection, only pay for work you authorize.
                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
    </div>
    </div>

export default Instructions;