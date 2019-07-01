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
        
        
        
        export default ResumeBrittany;