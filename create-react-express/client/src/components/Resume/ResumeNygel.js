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
                <img className="card-img-top rounded-circle z-depth-2" src="https://i.imgur.com/4B7oHwK.jpg"/> 
                </div>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text">Nygel</p>
                            <p className="card-text">Senior Mobile & Web Developer/Project Manager/Resourcing</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Professional with extensive experience and background in the Web & Mobile apps industry. Competent, reliable, and committed with a proven record of success in assuming increasing levels of responsibility. I am a very fast learner with the ability to adapt qualifications to any environment. 

I constantly demonstrating the capability to effectively multi-task on several projects and meet tight deadlines while working independently or with others as well as being an effective team leader.

My areas of expertise are listed below.

Mobile Application
- iOS
- Android
- Hybrid
- App deployment on stores (Play Store/App Store)

Web Applications
- Laravel
- PHP
- Wordpress
- Angular
- React
- Other platforms/frameworks

Graphics
- Game Artwork (2D/3D)
- Character Design
- 3D Modeling
- Video Production

Non- Techhnical resources
- Project Manager
- Operations Manager
- Technical Support Executives
- EA's and VA's
- Customer Support Team for companies/agencies</li>
                            <li className="list-group-item">$33.33
Hourly rate</li>
                            <li className="list-group-item">40
Jobs</li>
                        </ul>
                        <div className="card-body">
                        <a href="#" className="btn btn-primary">Contact</a>                        </div>
</div>
                </div>
            </div>
            );
        };
        
        
        
        export default Resume;