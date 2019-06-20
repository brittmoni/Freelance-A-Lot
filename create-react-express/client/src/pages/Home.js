import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form"
import Featuredjobs from "../components/Featuredjobs/Featuredjobs"

function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to Freelance-A-Lot!</h1>
            <Featuredjobs/>
            <Form/>
      <Footer/>
    </div>
  );
}

export default Home;
