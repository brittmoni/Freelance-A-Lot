import React from 'react';
import "./Resume.css";
import faker from 'faker';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../Navbar/Navbar.js"
import Footer from "../Footer/Footer.js"
import styles from './Resume.css'
import {Animated} from "react-animated-css";

const Resume = () => {
    return (
        <div className={styles.uicontainer}>
            <div className='navbar'>
            <div className={styles.navbar}>
            <Navbar />
            </div>
            </div>
            <div className='profile-card'>
                <div className={styles.card}>
                <div className="animated fadeInRight">
                <img className="card-img-top rounded-circle z-depth-2" src="https://i.imgur.com/ubgpU8v.jpg"/>
                </div> 
                        <div className="card-body">
                            <h5 className="card-title">Thibault</h5>
                            <p className="card-text">API Development | Web Development | Automation | PHP & JavaScript</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">"Can't say enough good things! He went above and beyond the initial contract to get us set up and operational. Amazing work!"
- Cameron & Meredith Herold, COO Alliance

"Working with Paul was phenomenal - easily my best experience on Upwork. He really cared about the project, was very personable and available whenever we had questions or if something came up. We had many moving pieces in our project and Paul was able to quickly wrap his head around it all and get everything running smoothly. I seriously don't know how we would have survived our launch if it wasn't for Paul!"
- Andrew Sartory, Sartory Wellness

"Paul was an absolute joy to work with. He is professional, reliable and he clearly takes a great deal of pride in the quality of his work."
- Luke Griffin </li>
                            <li className="list-group-item">36
Jobs


</li>
                            <li className="list-group-item">$70.00
Hourly rate</li>
                        </ul>
                        <div className="card-body">
                        <a href="#" className="btn btn-primary">Contact</a>                        </div>
</div>
                </div>
            </div>
            );
        };
        
        
        
        export default Resume;