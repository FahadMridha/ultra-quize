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
            <div className='flex m-10'>
                <img className='image-full h-96 w-1/2' src={quize7} alt="" />
                <h1>This is Quize Side {categories.length}</h1>
            </div>
            <div className='grid grid-cols-4 gap-2'>
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