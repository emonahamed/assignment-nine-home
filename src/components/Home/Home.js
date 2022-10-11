import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Header from '../Header/Header';
import './Home.css'
import boy from '../../boy.jpg'

const Home = () => {
    const home = useLoaderData();
    const homes = home.data;
    console.log(homes)
    return (
        <div>
            <div className='image-intro'>
                <div>
                    <img src={boy} alt="" />
                </div>
                <div >
                    <h4>Want to test yourself.... just dive into the Quiz section  :)</h4>
                </div>


            </div>

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