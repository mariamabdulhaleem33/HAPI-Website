import { Component } from "react";
import NavBar from "./NavBar.tsx";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ContactUs from "./Contact";
import mark from "../images/question mark.png"
import { useState } from "react";
import closed from "../images/arrow.png"
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () =>{
    const [selected, setSelected] = useState(null)

    const sectionRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash === '#FAQ') {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [location]);
  

    const toggle = (i) =>{
        if(selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }
        return(
            <div class="main">
                <NavBar/>
                <div class="our-story">
                    <h3>Our Story</h3>
                    <p>Egypt, known as "the gift of the Nile" has a rich agricultural history dating back thousands of years. however, modern agriculture in Egypt faces numerous challenges, including Water scarcity, unpredictable weather patterns, soil degradation, pests and diseases. these challenges threaten food security and agriculture sustainability in the region.</p>
                    <p>With our knowledge and passion for change, we developed an agricultural platform integrating advanced hardware and software solutions, from smart irrigation to disease detection. Our app offers real-time insights and personalized recommendations to boost productivity and sustainability for farmers. As we refine and expand, our mission remains steadfast: to innovate, foster resilience, and empower Egyptian farmers for a brighter future.</p>
                </div>
                <hr style={{  width:"60%", margin:"auto", color:"#d7cc96"}}/>
                <div class="FAQ" id="FAQ" ref={sectionRef}>
                <h3>Got questions? check out our FAQ</h3>
                <div class="faq-cont">
                    <div class="wrapper">
                        <div class="accordion">
                            {data.map((item,i)=>(
                                <div class="item">
                                    <div class="title" onClick={()=> toggle(i)}>
                                        <h4>{item.question}</h4>
                                        <img src={closed}b/>
                                    </div>
                                    <div class={selected == i? 'content show' : 'content'}>{item.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img class="marko" src={mark}/>
                </div>
                </div>
                <hr style={{  width:"60%", margin:"auto", color:"#d7cc96"}}/>
                <ContactUs/>
                <Footer/>
            </div>
        );
    }

export default About;

const data= [
    {
        question: "What does HAPI mean?",
        answer: "Hapi,  in ancient Egyptian mythology he is the god of the Nile River's annual flooding, which was vital for the fertility and prosperity of the land."
    },
    {
        question: "How can you sign up as a landowner?",
        answer: "first, you call the customer service  you can contact us by phone or e-mail.then, we give you a landowner ID and a land ID. you then take them and type them in their.after that you can just type your phone number, user name and password .then if you have crops in your land you can choose which type do you have, and if there is no crops we would recommend you the suitable crop to  plant . "
    },
    {
        question: "How can you sign up as a farmer?",
        answer: "first, you call the landowner you work with and he will give you the land ID after that you can just type your phone number, user name, password and the land ID."
    },
    {
        question: "How do you use the app for pest and disease detection ?",
        answer: "It’s simple, just open the app .. click on the camera icon ...take a picture .. wait tell it’s processed and here you go ! the detection is done"            
    },
    
]