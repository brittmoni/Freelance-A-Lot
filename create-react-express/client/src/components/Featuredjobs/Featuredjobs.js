import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom';
import "./Featuredjobs.css";
import Button from 'react-bootstrap/Button';


// depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Featuredjobs = props =>
    <div class="featured">
        <h3>Find New Jobs</h3>
        <hr></hr>
        {/*---- JOB 1 section ----- */}
        <div class="row">
            <h4>Full-Stack Javascript Developer (Node/React)</h4>
            <p>We are looking for a remote US based full-stack Javascript developer with experience using
            React, Node.JS, Socket.io, and AWS.</p>
            <div className="col-md-6">
                <br></br>
                <Button>Apply Now</Button>
            </div>
            <div className="col-md-6">
                <p>Share this job with your friends</p>
                <i className="fa fa-envelope-square fa-2x"></i>
            </div>
        </div>
        {/* -------JOB 2 section  --------*/}
        <div class="row">
            <h4>Web Designer</h4>
            <p>Intersect Digital is looking for a professional Web Designer with experience in content management systems to take over the graphic and user interface design of clients' website. We're looking for a candidate who has created and maintained functional, attractive websites.</p>

            <div className="col-md-6">
                <br></br>
                <Button>Apply Now</Button>
            </div>
            <div className="col-md-6">
                <p>Share this job with your friends</p>
                <i className="fa fa-envelope-square fa-2x"></i>
            </div>
        </div>
        {/* -------JOB 3 section ----------- */}
        <div class="row">
            <h4>Front-end developer to assist on web app (HTML, CSS)</h4>
            <p className="description">We are looking for a front-end developer to help us finish up a web application. The application is developed in .net core,
and the client portion is a mix of custom javascript, Kendo UI controls,
and typescript.</p>
            <div className="col-md-6">
                <br></br>
                <Button>Apply Now</Button>
            </div>
            <div className="col-md-6">
                <p>Share this job with your friends</p>
                <i className="fa fa-envelope-square fa-2x"></i>
            </div>
        </div>
    </div>





export default Featuredjobs;