import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import Instructions from "../components/Instructions/Instructions";
import Devs from "../components/Devs/Devs";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form"
import Featuredjobs from "../components/Featuredjobs/Featuredjobs"

function Home() {
  return (
    <div className="text-center animated fadeIn 3s">
      <Header backgroundImage="https://i.imgur.com/lR3Nc9S.jpg">
        <div className="animated bounceInUp"><h1>Freelance-A-Lot®</h1></div>
      </Header>
      <Navbar />
      <Categories/>
      <Instructions/>
      <Devs/>
      <Featuredjobs />
     
     <Footer />
    </div>
  );
}

export default Home;
