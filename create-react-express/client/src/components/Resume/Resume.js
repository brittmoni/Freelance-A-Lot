import React from 'react';
import "./Resume.css";
import faker from 'faker';
import logo from '../../img/logo.png'


const Resume = () => {
    return (
        <div className="ui container comments">

            <div class="card w-100">

                <div class="card-logo">
                <img src={logo} alt={"logo"}/> 
                </div>

                <div class="card-body">
                    <div class="container">

                        <div class="row">


                            {/* First row */}
                            <div class="col-4">
                                <a href="/" className="avatar">
                                    <img alt="avatar" src={faker.image.avatar()} />
                                </a>

                                <div className="ranking">


                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                Work
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="ranking">
                                        Skills
                                    <hr />
                                    </div>
                                </div>

                            </div>
                            {/* Second row */}
                            <div class="col-8">


                                <div className="ranking">
                                    Name
                                 </div>



                                <span classname="date">
                                    Job Title
                                 </span>
                                <hr />



                                <div className="ranking">
                                    Ranking
                        </div>
                                <hr />
                                <a href="#" class="btn btn-primary">Contact</a>
                                <a href="#" class="btn btn-primary">Connect</a>

                                <hr />
                                <div className="ranking">

                                    Contact Information
                        </div>
                                <hr />
                                <div className="ranking">

                                    Basic Information
                    </div>
                                <hr />


                            </div>
                        </div>
                    </div>

                    <div className="resume container">
                    </div>
                </div>
            </div>

        </div>
    );
};



export default Resume;

