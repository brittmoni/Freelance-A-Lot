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
                <Navbar />
            </div>
            <div className='card'>
                <div className={styles.card}>
                    <img class="card-img-top" src={faker.image.avatar()} alt="avatar"/> 
                        <div class="card-body">
                            <h5 class="card-title">Profile</h5>
                            <p class="card-text">Name</p>
                            <p class="card-text">Title</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Skills</li>
                            <li class="list-group-item">Currently working</li>
                            <li class="list-group-item">Contact informatiom</li>
                        </ul>
                        <div class="card-body">
                        <a href="#" class="btn btn-primary">Contact</a>                        </div>
</div>
                </div>
            </div>
            );
        };
        
        
        
        export default Resume;
        
        
