import React from 'react';
//import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import "./Devs.css";
import {Animated} from "react-animated-css";
import {Link} from "react-router-dom";

function Devs (props) {
    return (
        <div className="devs">
        <div>
            <h3>Browse our highest-rated resources</h3>
            <hr></hr>
        </div>
        <CardDeck className="card animated fadeInUp">
            <Card className="animated fadeInLeft delay-5s">
                <Card.Img variant="top"  src="https://i.imgur.com/T4EMxKw.jpg"/>
                <Card.Body>
                    <Card.Title>Annabella W.</Card.Title>
                    <Card.Text>
                    I'm a creative developer who can take your project idea from scratch and build out a beautiful
                                    and modern interface that gets results. Whatever the project, my goal is to leave your
                                    users with the best first impression possible. As a designer, I am here to bring your
                                    ideas to life. My main focus is to create unique and expressive products that are easy-to-use
                                    and understand. My favorite tools for the job are Adobe XD, Photoshop, and Illustrator.
      </Card.Text>
                </Card.Body>
                <Card.Footer id="cardfooter">
                    <small className="text">
                    <Link className="profile-link" to="/profile">Annabella's Portfolio</Link></small>
                </Card.Footer>
            </Card>
            <Card className="animated fadeInLeft delay-5s">
                <Card.Img variant="top" src="https://i.imgur.com/GnEKrY2.jpg" />
                <Card.Body>
                    <Card.Title>Brittany F.</Card.Title>
                    <Card.Text>
                    I am a full stack web developer with years of experience designing, developing, and
                                    maintaining web applications on the cloud.
                                    I specialize in Node.JS, MySQL, mongoDB, JavaScript, jQuery, Bootstrap, HTML, and CSS. I have never encountered a web development problem I couldn't solve and will always find a solution to your issue.
                                    My primary focus is to support, service and add value to my customers. I listen and clearly understand my customers issues and technology needs.
                                    
        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer id="cardfooter">
                    <small className="text">
                    <Link className="profile-link" to="/profile">Brittany's Portfolio</Link></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.imgur.com/4B7oHwK.jpg" />
                <Card.Body>
                    <Card.Title>Nygel P.</Card.Title>
                    <Card.Text>I am a Full-stack Developer. I enjoy taking complex problems and turning them
                                    into simple and beautiful code. I love structure and logic. I have been coding around
                                    6 years now and I never stop learning – I love it. I want to share my knowledge with
                                    other upcoming or current developers. I am a current developer at the Digital Advertising
                                    Agency based in Charlotte, NC. Where I spend constant hours making the internet a better
                                    place.                  
      </Card.Text>
                </Card.Body>
                <Card.Footer id="cardfooter">
                    <small className="text">
                    <Link className="profile-link" to="/profile">Nygel's Portfolio</Link></small>
                </Card.Footer>
            </Card>
            <Card className="animated fadeInRight delay-5s">
                <Card.Img variant="top" src="https://i.imgur.com/6Fue2AN.jpg"/>
                <Card.Body>
                    <Card.Title>Tanya O.</Card.Title>
                    <Card.Text>A highly driven, organized, and efficient project manager has a proven track record of quality
                                    and timely project completions. Experienced in managing and a wide variety of positions
                                    on various teams throughout numerous projects / project types, Tanya Odegova is focused
                                    on the big picture milestones while continuous and actively participating in development,
                                    maintaining feedback and guidance, and pursuing open, appreciable, and gratifying client
                                    relationships.
                  
      </Card.Text>
                </Card.Body>
                <Card.Footer id="cardfooter">
                    <small className="text">
                    <Link className="profile-link" to="/profile">Tanya's Portfolio</Link></small>
                </Card.Footer>
            </Card>

            <Card className="animated fadeInRight delay-5s">
                <Card.Img variant="top" src="https://i.imgur.com/ubgpU8v.jpg"/>
                <Card.Body>
                    <Card.Title>Thibault F.</Card.Title>
                    <Card.Text>I am a 100% full-time freelancer specializing in creative and efficient designs that work on all devices/platforms. I work with HTML, CSS, PHP, jQuery, MySQL and all Adobe CC apps. Custom WordPressed solutions with enhanced functionality are my main focus.
                    I use a design/build approach to increase efficiency and decrease development time and costs. Please feel free to invite me to interview on your project. I'm always looking for new opportunities.
                    
      </Card.Text>
                </Card.Body>
                <Card.Footer id="cardfooter">
                    <small className="text">
                    <Link className="profile-link" to="/profile">Thibault's's Portfolio</Link></small>
                </Card.Footer>
            </Card>
        </CardDeck>
        </div>
        );
}
    
    export default Devs;