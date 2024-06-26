import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavBar from "./NavBar.tsx";
import ScrollableComponent from "./ScrollableList";
import Scr from "./scr";
import Footer from "./Footer";

import logo from '../images/LOGOFILLED.png';
import slide1 from "../images/Property 1=Default.png";
import slide2 from "../images/Property 1=Variant2.png";
import slide3 from "../images/Property 1=Variant3.png";
import slide5 from "../images/Property 1=Variant5.png";
import slide6 from "../images/Property 1=Variant6.png";
import preview from "../images/Preview.png";
import irr from "../images/irrigation icon (1).png";
import recommend from "../images/plant.png";
import dis from "../images/pest icon (1).png";
import Lib from "../images/Group (1).png";
import vegetables from "../images/Veggies' box anim.png";

const Home: React.FC = () => {
    const [t] = useTranslation("global");
    const navBarRef = useRef<HTMLDivElement>(null);

    return (
        <div className='main'>
            <NavBar ref={navBarRef} initialActiveTab="home" />
            <div className="home-header">
                <div className="header-left-sec-top">
                    <img src={logo} alt="HAPI logo" className="logo" />
                    <p>Revitalizing<br /> Egyptian Agriculture<br /> with smart solutions</p>
                </div>
                <div className="preview">
                    <img src={preview} alt="Preview" />
                    <Link to="https://www.youtube.com/watch?v=nJzjUrvz0p4" style={{ textDecoration: "none" }}>
                        <p>{t("Home.preview")}</p>
                    </Link>
                </div>
            </div>
            <div className="offer">
                <h3>We Offer You</h3>
                <div className="offer-up">
                    <div className="irr">
                        <img src={irr} alt="Irrigation" />
                        <p>Irrigation & Fertilization Optimization</p>
                    </div>
                    <div className="recommend">
                        <img src={recommend} alt="Recommendation" />
                        <p>Crop Recommendation</p>
                    </div>
                </div>
                <div className="offer-down">
                    <div className="dis">
                        <img src={dis} alt="Diseases" />
                        <p>Diseases Detection</p>
                    </div>
                    <div className="Lib">
                        <img src={Lib} alt="Library" />
                        <p>Comprehensive Library</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className="vision">
                <div className="vision-left">
                    <h3>Our Vision</h3>
                    <p>To envision an agricultural renaissance in Egypt, where cutting-edge technologies empower farmers, enhance productivity, ensure food sovereignty, and foster economic prosperity across communities.</p>
                </div>
                <div className="vision-right">
                    <img src={vegetables} alt="Vegetables" />
                </div>
            </div>
            <hr style={{ width: "55%", color: "#d7cc96" }} />
            <ScrollableComponent />
            <Footer />
        </div>
    );
};

export default Home;
