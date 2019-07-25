import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/Navbar/Navbar"
import Form from "../components/Form/Form"
import Footer from "../components/Footer/Footer"
import Resume from "../components/Resume/Resume.js"

function Profile() {
  return (
    <div>
      <Navbar/>
      <Resume/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Profile;
