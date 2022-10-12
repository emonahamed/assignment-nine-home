import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header' >
            <div>
                <Link to='/home'>QuizPlay</Link>
            </div>

            <div>
                <Link to='/statics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>


    );
};

export default Header;