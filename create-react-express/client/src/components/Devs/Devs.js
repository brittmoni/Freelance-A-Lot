import React from 'react';
//import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import "./Devs.css";
import {Animated} from "react-animated-css";
import {Link} from "react-router-dom"

function Devs (props) {
  return (
    <div className="devs">
    <div>
      <h3>Browse our highest-rated resources</h3>
      <hr></hr>
    </div>
    <CardDeck className="card animated fadeInUp">
      <Card className="animated fadeInLeft delay-5s">
        <Card.Img variant="top" src="https://i.imgur.com/T4EMxKw.jpg"/>
        <Card.Body>
          <Card.Title>Annabella W.</Card.Title>
          <Card.Text>
          <h3> 
            Expert WordPress Developer
          </h3>
          <h2>
            $97/hr Charlotte, NC
          </h2>
          <hr/>
          <h4>
          <button type="button" class="btn btn-default">WordPress</button>
          <button type="button" class="btn btn-default">HTML5</button>
          <button type="button" class="btn btn-default">HTML</button>
          <button type="button" class="btn btn-default">CSS</button>
          </h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer id="cardfooter">
          <small className="text">
          <Link className="profile-link" to="/profileannabella">View Profile</Link></small>
        </Card.Footer>
      </Card>
      <Card className="animated fadeInLeft delay-5s">
        <Card.Img variant="top" src="https://i.imgur.com/GnEKrY2.jpg" />
        <Card.Body>
          <Card.Title>Brittany F.</Card.Title>
          <Card.Text>
          <h3> 
            Web Developer
          </h3>
          <h2>
            $70/hr Charlotte, NC
          </h2>
          <hr/>
          <h4>
          <button type="button" class="btn btn-default">PHP</button>
          <button type="button" class="btn btn-default">JavaScript</button>
          <button type="button" class="btn btn-default">HTML5</button>
          <button type="button" class="btn btn-default">Java</button>
          </h4>
    
          </Card.Text>
        </Card.Body>
        <Card.Footer id="cardfooter">
          <small className="text">
          <Link className="profile-link" to="/profilebrittany">View profile</Link></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/4B7oHwK.jpg" />
        <Card.Body>
          <Card.Title>Nygel P.</Card.Title>
          <Card.Text><h3> 
            Senior Mobile & Web Developer
          </h3>
          <h2>
            $80/hr Charlotte, NC
          </h2>
          <hr/>
          <h4>
          <button type="button" class="btn btn-default">iOS Development</button>
          <button type="button" class="btn btn-default">Android App Development</button>
          </h4>       
   </Card.Text>
        </Card.Body>
        <Card.Footer id="cardfooter">
          <small className="text">
          <Link className="profile-link" to="/profilenygel">View Profile</Link></small>
        </Card.Footer>
      </Card>
      <Card className="animated fadeInRight delay-5s">
        <Card.Img variant="top" src="https://i.imgur.com/6Fue2AN.jpg"/>
        <Card.Body>
          <Card.Title>Tanya O.</Card.Title>
          <Card.Text>
          <h3> 
          Expert Android, iOS, Web Developer          </h3>
          <h2>
            $75/hr Charlotte, NC
          </h2>
          <hr/>
          <h4>
          <button type="button" class="btn btn-default">iOS Development</button>
          <button type="button" class="btn btn-default">Android App Development</button>
          </h4>   
   </Card.Text>
        </Card.Body>
        <Card.Footer id="cardfooter">
          <small className="text">
          <Link className="profile-link" to="/profiletanya">View Profile</Link></small>
        </Card.Footer>
      </Card>
​
      <Card className="animated fadeInRight delay-5s">
        <Card.Img variant="top" src="https://i.imgur.com/ubgpU8v.jpg"/>
        <Card.Body>
          <Card.Title>Thibault F.</Card.Title>
          <Card.Text>
          <Card.Text><h3> 
          API Development | Web Development | Automation | PHP & JavaScript
          </h3>
          <h2>
            $75/hr Charlotte, NC
          </h2>
          <hr/>
          <h4>
          <button type="button" class="btn btn-default">API Development</button>
          <button type="button" class="btn btn-default">SQL</button>
          </h4>       
   </Card.Text>
   </Card.Text>
        </Card.Body>
        <Card.Footer id="cardfooter">
          <small className="text">
          <Link className="profile-link" to="/profilethibault">View Profile</Link></small>
        </Card.Footer>
      </Card>
    </CardDeck>
    </div>
    );
}

  export default Devs;
