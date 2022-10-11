import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ home }) => {
    console.log(home)
    const { id, name, logo, total } = home;
    return (
        <div className='full-card'>
            <div className='card'>
                <img src={logo} alt="" />
                <h3>Name: {name}</h3>
                <h4>Total Question:{total}</h4>
                <Link to={`/quiz/${id}`}> <button type="button" className="btn btn-success">start Quiz</button></Link>
            </div>
        </div >

    );
};

export default Card;