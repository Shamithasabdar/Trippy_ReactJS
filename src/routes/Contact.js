import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
        <div>
            <Navbar />
             <Hero
             cName="hero-mid"
             heroImg={ContactImg}
             title="Contact"
             btnClass="hide"
             
             />
             <ContactForm/>
              <Footer/>
           
        </div>
        
    );


}

export default Contact;