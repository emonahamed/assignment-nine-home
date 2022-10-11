import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header' >
            <div>
                <Link to='/home'>Home</Link>
            </div>
            {/* <Link to='/topics'>Topics</Link> */}
            <div>
                <Link to='/statics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>


    );
};

export default Header;