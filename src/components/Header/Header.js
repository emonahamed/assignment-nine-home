import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/statics'>Statics</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;