import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    {
        id: 1,
        name: 'Poha (Flattened Rice)',
        Ingredients: 'Flattened rice, mustard seeds, turmeric powder, onions, green chilies, peanuts, curry leaves, coriander leaves, lemon, salt.',
        description: 'A light and flavorful dish made with flattened rice and seasoned with spices, peanuts, and fresh coriander.',
        price: '₹99'
    },
    {
        id: 2,
        name: 'Masala Dosa',
        Ingredients: 'Dosa batter (rice and urad dal), potatoes, onions, green chilies, curry leaves, mustard seeds, turmeric powder, oil, salt.',
        description: 'poached egg, avocado, onion, tomatoes, breadA thin, crispy rice and lentil crepe stuffed with spiced mashed potatoes, served with coconut chutney and sambar.'
    },
    {
        id: 3,
        name: 'Aloo Paratha',
        Ingredients: 'Whole wheat flour, boiled potatoes, green chilies, coriander leaves, cumin seeds, garam masala, salt, ghee or oil.',
        description: 'A stuffed flatbread made with seasoned mashed potatoes, typically served with yogurt and pickle.',
        price: '₹79'
    }
];
const lunch = [
    {
        id: 1,
        name: 'Paneer Butter Masala with Naan',
        Ingredients: 'Paneer, tomatoes, onions, garlic, ginger, cashews, butter, cream, garam masala, red chili powder, salt, naan bread.',
        description: ' Creamy and mildly spiced curry made with paneer (Indian cottage cheese), enjoyed with soft naan bread.',
        price: '₹139'
    },
    {
        id: 2,
        name: 'Chole Bhature',
        Ingredients:  ' Chickpeas, onions, tomatoes, ginger, garlic, garam masala, chole masala, flour (for bhature), yogurt, salt, oil.',
        description: 'A popular North Indian dish with spicy chickpeas served alongside deep-fried, fluffy bread called bhature.',
        price: '₹29'
    },
    {
        id: 3,
        name: 'Pizza',
        description: 'chorizo, italian salami, tomatoes, mushrooms, olives',
        price: '₹199'
    }
];

const dinner = [
    {
        id: 1,
        name: 'Baingan Bharta with Roti',
        Ingredients: 'Eggplant, tomatoes, onions, garlic, green chilies, coriander powder, garam masala, salt, roti (whole wheat flour)',
        description: 'Smoky-flavored mashed eggplant cooked with spices, served with roti.',
        price: '₹449'
    },
    {
        id: 2,
        name: 'Vegetable Pulao with Raita',
        Ingredients: 'Basmati rice, mixed vegetables (peas, carrots, beans), cumin seeds, whole spices (cloves, cardamom), onions, ginger, salt, yogurt, coriander leaves.',
        description: 'oFragrant rice cooked with vegetables and mild spices, served with a cooling yogurt raita.',
        price: '₹339'
    },
    {
        id: 3,
        name: 'Rajma (Kidney Bean Curry) with Steamed Rice',
        Ingredients: 'Red kidney beans, onions, tomatoes, garlic, ginger, garam masala, turmeric powder, cumin seeds, salt, basmati rice.',
        description: ' A hearty, flavorful curry made with kidney beans and served with steamed rice.',
        price: '₹229'
    }
];

const dessert = [
    {
        id: 1,
        name: 'Lemon Cake',
        Ingredients: 'All-purpose Lemon, Cake , Sweet',
        description: 'fDeep-fried pastry filled with spiced potato and peas, a popular and crispy snack.',
        price: '₹99'
    },
    {
        id: 2,
        name: 'Samosa',
        Ingredients: 'All-purpose flour, potatoes, peas, green chilies, garam masala, coriander powder, cumin seeds, salt, oil.',
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: '₹119'
    },
    {
        id: 3,
        name: 'Pakoras (Vegetable Fritters)',
        Ingredients: 'Chickpea flour, assorted vegetables (onion, potato, spinach), green chilies, cumin seeds, salt, oil.',
        description: 'Deep-fried fritters made with vegetables coated in a spiced chickpea flour batter.',
        price: '₹89'
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardTitle className='text-center fs-3 text-info'>
                                                {breakfast.Ingredients}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardTitle className='text-center fs-3 text-info'>
                                                {lunch.Ingredients}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardTitle className='text-center fs-3 text-info'>
                                                {dinner.Ingredients}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Snacks</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardTitle className='text-center fs-3 text-info'>
                                                {dessert.Ingredients}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;