import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-primary fw-bold'>Welcome To</h2>
                            <h1 className='mb-5 text-primary fw-bold text-center text-sm-start'>The Taste Table Restaurant</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>Welcome to The Taste Table – where flavor meets quality! We are passionate about bringing you the best food, crafted with the finest ingredients and a commitment to excellence. Our team is dedicated to creating dishes that not only satisfy your cravings but also provide a delightful dining experience.

</p>
                        <p className='mb-5'>We believe that good food has the power to bring people together, and that's why we pour our hearts into every meal we serve. Whether you’re ordering for a family gathering, a work event, or simply a treat for yourself, we ensure that every bite delivers freshness, taste, and satisfaction.

Join us and taste the difference – because at The Taste Table, food is our passion, and your satisfaction is our priority.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Food</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Masala Dosa</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>₹119</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Paneer Butter Masala</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>₹229</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Chole Bhature</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>₹109</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Drinks</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Coffee</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>₹29</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Masala Chai (Spiced Tea)</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>₹49</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Lassi (Sweet/Salted)</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>₹59</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>

            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;