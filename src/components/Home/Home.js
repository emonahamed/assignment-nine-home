import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const home = useLoaderData();
    const homes = home.data;
    console.log(homes)
    return (
        <div>
            <div className='full-card'>

                {
                    homes.map(home => <Card
                        key={home.id}
                        home={home}


                    ></Card>)
                }
            </div>




        </div>
    );
};

export default Home;