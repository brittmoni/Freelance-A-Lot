import React from 'react';
import "./Resume.css";
import faker from 'faker';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../Navbar/Navbar.js"
import Footer from "../Footer/Footer.js"

const Resume = () => {
    return (
        <div className="ui container comments">
            <div>
                <Navbar />


            </div>
            <div class="card w-100">

                <div class="grid">
                    <header>
                        Header
                    </header>
                    <aside class="sidebar-left">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <a href="/" className="avatar">
                                        <img alt="avatar" src={faker.image.avatar()} />
                                    </a>

                                </div>
                                <div class="col">Work</div>
                                <div class="w-100"></div>
                                <div class="col">Skills</div>
                            </div>
                        </div>
                    </aside>

                    <article>
                        <div class="container">
                            <div class="row">
                                <div class="col">Name</div>
                                <div class="col">Column2</div>
                                <div class="w-100"></div>
                                <div class="col">Title</div>
                                <div class="col">Column4</div>
                                <div class="w-100"></div>
                                <div class="col"><a href="#" class="btn btn-primary">Contact</a></div>
                                <div class="col"><a href="#" class="btn btn-primary">Connect</a></div>
                                <div class="w-100"></div>
                                <div class="col">Contact Information</div>
                                <div class="col">Column4</div>
                                <div class="w-100"></div>
                                <div class="col">Basic Information</div>
                                <div class="col">Column4</div>
                            </div>
                        </div>
                    </article>

                    <aside class="sidebar-right">
                        Right Sidebar
  </aside>

                    <footer>
                        Footer
  </footer>

                </div>

            </div>
            <Footer/>

        </div>
    );
};



export default Resume;

