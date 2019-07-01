import React from 'react';
import "./Resume.css";
import faker from 'faker';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../Navbar/Navbar.js"
import Footer from "../Footer/Footer.js"
import styles from './Resume.css'
import {Animated} from "react-animated-css";

const ResumeBrittany = () => {
    return (
        <div className={styles.uicontainer}>
            <div className='navbar'>
            <div className={styles.navbar}>
            <Navbar />
            </div>
            </div>
            <div className='profile-card'>
                <div className={styles.card}>
                <div className="animated fadeInLeft">
                <img className="card-img-top rounded-circle z-depth-2" src="https://i.imgur.com/GnEKrY2.jpg"/> 
                </div>
                        <div className="card-body">
                            <h5 className="card-title">Brittany</h5>
                            <p className="card-text">Ciber Security Architect</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">I'm a web developer with over 13 years of experience in the field. I work full time for a software company called Palo Alto Software. I've designed, developed and tested many projects. I write clean, responsive code and always hit my deadlines on time. I have experience with analytics, version control and working in a team environment. I know a plethora of computer languages and will take the time to learn a new language if needed. I'm confident, hard working and dependable. I will work around the clock until my clients are satisfied. </li>
                            <li className="list-group-item">$40.00
Hourly rate</li>
                            <li className="list-group-item">$10k+
Total earned</li>
                        </ul>
                        <div className="card-body">
                        <a href="#" className="btn btn-primary">Contact</a>                        </div>
</div>
                </div>
            </div>
            );
        };
        
        
        
        export default ResumeBrittany;