import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Devs from "../components/Devs/Devs";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form"
import Featuredjobs from "../components/Featuredjobs/Featuredjobs"

function Home() {
  return (
    <div class="text-center animated fadeIn delay-5s">
      <Header backgroundImage="https://i.imgur.com/lR3Nc9S.jpg">
        <h1>Freelance-A-Lot®</h1>
      </Header>
      <Navbar />
      <Devs/>
      <Featuredjobs />
     
     <Footer />
    </div>
  );
}

export default Home;
