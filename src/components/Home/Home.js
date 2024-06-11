import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import banner from '../../assets/images/watchdogsfull.jpeg';
import { NavBar } from '../MyNavBar/NavBar';
import '../../assets/fonts/fonts.css';
import './Home.css';


export const Home = () => {
    return (
        <div className="image-container">
            <NavBar/>
            <img src={banner} alt="L'équipe de Watch Dogs" className="img-fluid" />
            <h1>WATCH DOGS</h1>
        </div>
    );
};
