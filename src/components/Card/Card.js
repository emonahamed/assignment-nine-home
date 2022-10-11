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
                <h3>name: {name}</h3>
                <Link to='/emon'> <button type="button" className="btn btn-success">start Quiz</button></Link>
            </div>
        </div >

    );
};

export default Card;