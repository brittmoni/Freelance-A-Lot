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
                <img className="card-img-top rounded-circle z-depth-2" src="https://i.imgur.com/6Fue2AN.jpg"/> 
                </div>
                        <div className="card-body">
                            <h5 className="card-title">Tanya</h5>
                            <p className="card-text">Expert Android, iOS, Web Developer</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">I am an expert software engineer. I specialize in mobile app development and machine learning.

I run a software development company called Minibit Technologies that has published more than 50 Android and iOS apps. I myself have published more than fifteen Android apps. My clients have ranged from entrepreneurs to large companies such as Upwork (the site you're currently on!).

Though my hourly rate is high, I produce exceptional work very quickly. Many of my clients find it cost effective to bring me on as a technical and/or business consultant.

Here are some of my technical skills:
• Expert: Java, Android, Python, Machine Learning, Deep Learning, Project Management
• Advanced: C++, C, OpenCV, JavaScript, SQL, Computer Security (web based and client side attacks)
• Miscellaneous Technologies:
– Heroku (continuous deployment; managing servers at scale; connecting to MongoDB, S3)
– AWS (S3, Elastic Compute, deep learning training + inference)

Talk is cheap, though. Please look through my portfolio projects, Upwork test scores, and reviews for a more thorough assessment of my abilities. I am a top rated developer here on Upwork as well as a top developer (distinction earned after doing very well in a coding competition sponsored by Upwork).

In short, if you need any kind of software developed, look no further. My coding skills are incredible, my work ethic unparalleled. If you need help setting up a team of developers, but aren't quite sure how to most effectively do so, or if you just need an expert software engineer's advice, then again, I'm your guy.</li>
                            <li className="list-group-item">$99.99
Hourly rate</li>
                            <li className="list-group-item">$100k+
Total earned</li>
                        </ul>
                        <div className="card-body">
                        <a href="#" className="btn btn-primary">Contact</a>                        </div>
</div>
                </div>
            </div>
            );
        };
        
        
        
        export default Resume;