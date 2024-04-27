import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){
    return(
        <div>
           <Navbar />
             <Hero
             cName="hero-mid"
             heroImg={ServiceImg}
             title="Service"
             btnClass="hide"
             />
             <Trip/>
              <Footer/>

        </div>
        
    );


}

export default Service;