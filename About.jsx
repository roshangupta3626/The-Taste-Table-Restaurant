import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>Welcome to The Taste Table where flavor meets quality! We are passionate about bringing you the best food, crafted with the finest ingredients and a commitment to excellence. Our team is dedicated to creating dishes that not only satisfy your cravings but also provide a delightful dining experience.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>We believe that good food has the power to bring people together, and that's why we pour our hearts into every meal we serve. Whether you’re ordering for a family gathering, a work event, or simply a treat for yourself, we ensure that every bite delivers freshness, taste, and satisfaction.

Join us and taste the difference – because at The Taste Table, food is our passion, and your satisfaction is our priority.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;