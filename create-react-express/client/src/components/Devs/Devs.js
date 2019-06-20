import React from 'react';
//import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import "./Devs.css";
import annabellaimg from '../../img/Annabella.png';
import britimg from '../../img/Britt.png';
import nygelimg from '../../img/nygelprofile.png';
import tanyaimg from '../../img/tanyaprofile.png';

function Devs (props) {
    return (
        <div className="devs">
        <div>
            <h3>Browse our highest-rated resources</h3>
            <hr></hr>
        </div>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={annabellaimg}/>
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
                <Card.Footer>
                    <small className="text-muted">placeholder for url to profile</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={britimg} />
                <Card.Body>
                    <Card.Title>Brittany F.</Card.Title>
                    <Card.Text>
                    I am a full stack web developer with almost 6 years experience designing, developing, and
                                    maintaining web applications on the cloud.
        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">placeholder for url to profile</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={nygelimg} />
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
                <Card.Footer>
                    <small className="text-muted">placeholder for url to profile</small>
                </Card.Footer>
            </Card>
        </CardDeck>
        </div>
        );
}
    
    export default Devs;