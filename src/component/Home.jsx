import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';
import quize7 from '../assest/quize7.jpg'

const Home = () => {
    const data=useLoaderData()
    const categories=data.data
    // console.log(categories);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  m-10'>
                <img className='image-full  h-96 w-full rounded-lg' src={quize7} alt="" />
                <h1 className='text-xl font-bold text-sky-500 text-center mt-12' >A quiz refers to a short test of knowledge. <br /> A quiz is much shorter than a traditional test or exam and is rarely impactful on a final course grade.</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
                {
                    categories.map(categorie=> <Categories
                        key={categorie.id}
                        categorie={categorie}
                    >

                    </Categories>)
                }
            </div>
        </div>
    );
};

export default Home;