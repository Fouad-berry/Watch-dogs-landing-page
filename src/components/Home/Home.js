import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import banner from '../../assets/images/watchdogsfull.jpeg';
import { NavBar } from '../MyNavBar/NavBar';
import '../../assets/fonts/fonts.css';
import './Home.css';

export const Home = () => {
    return (
        <div className="home-container">
            <div className="image-container">
                <img src={banner} alt="L'équipe de Watch Dogs" className="img-fluid" />
                <div className="text-overlay">
                    <h1>WATC<span className='high'>H</span> DOGS</h1>
                </div>
            </div>
        </div>
    );
};
