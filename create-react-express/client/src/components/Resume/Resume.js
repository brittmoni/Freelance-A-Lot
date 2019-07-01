import React from 'react';
import "./Resume.css";
import faker from 'faker';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../Navbar/Navbar.js"
import Footer from "../Footer/Footer.js"
import styles from './Resume.css'
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
    
                <div id="welcomeText">
                 <img src={sessionStorage.getItem("freelancerPic")} width="200px" height="200px" />
                </div>
                <h2>{sessionStorage.getItem("freelancerName")}</h2>

                        <div className="card-body">
                            <p className="card-text">Title</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Skills</li>
                            <li className="list-group-item">Work</li>
                            <li className="list-group-item">Contact information</li>
                        </ul>
                        <div className="card-body">
                        <a href="#" className="btn btn-primary">Contact</a>                        </div>
</div>
                </div>
            </div>
            );
        };
        
        
        
        export default Resume;
        
        
