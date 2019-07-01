import React from 'react';
import "./Resume.css";
import faker from 'faker';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../Navbar/Navbar.js"
import Footer from "../Footer/Footer.js"
import styles from './Resume.css'
import {Animated} from "react-animated-css";

const ResumeAnnabella = () => {
    return (
        <div className={styles.uicontainer}>
            <div className='navbar'>
            <div className={styles.navbar}>
            </div>
            </div>
            <div className='profile-card'>
                <div className={styles.card}>
                <div className="animated fadeInRight">
                <img className="card-img-top rounded-circle z-depth-2" src="https://i.imgur.com/T4EMxKw.jpg"/> 
                </div>
                        <div className="card-body">
                            <h5 className="card-title">Annabella</h5>
                            <p className="card-text">Expert WordPress Developer</p>
                            <p className="card-text">Hey there! I'm Anne, an Austin, TX based developer.

I am a certified WordPress expert who specializes in PSD to WordPress conversions, WooCommerce and custom theme/plugin development. 

I have a passion for providing my clients with modern, clean and fully validated sites.

In 15+ years, I have worked for a variety of clients, from individuals to corporations. I pride myself on providing frequent and professional communication to all of my clients.

I am a native English speaker.

I look forward to working with you!

</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">$97.00
Hourly rate</li>
                            <li className="list-group-item">$100k+
Total earned</li>
                            <li className="list-group-item">100 Jobs</li>
                        </ul>
                        <div className="card-body">
                        <a href="#" className="btn btn-primary">Contact</a>                        </div>
</div>
                </div>
            </div>
            );
        };
        
        
        
        export default ResumeAnnabella;