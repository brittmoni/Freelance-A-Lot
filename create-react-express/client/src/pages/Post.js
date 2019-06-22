import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Post(props) {
  return (
    <div className="text-center animated fadeIn 3s">
      <Navbar />
      <Header backgroundImage="https://i.imgur.com/lR3Nc9S.jpg">
        <div className="animated bounceInUp"><h1>Freelance-A-Lot®</h1></div>
      </Header>
      <Categories />
      <br></br>
      <h3>Post Job</h3>
      <hr></hr>
      <br></br>
      <br></br>
      <div className="container">
      <Form>
        <Form.Group controlId="formtitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" name="job-title" />
          <Form.Text className="text-muted">
            
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formdescription">
          <Form.Label>Job Description</Form.Label>
          <Form.Control type="textarea"/>
        </Form.Group>
        <Button variant="primary" value="Submit" type="submit">
          Submit
  </Button>
      </Form>
</div>
<br></br>
      <Footer />

    </div>
  );
}

export default Post;