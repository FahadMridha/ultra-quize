import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categorie }) => {
    const { name,id,logo,total } = categorie
    return (
        <div>
            <div className="card w-9/12 bg-base-300 shadow-xl ml-5">
                <figure><img className='image-full' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>Total Quize:{total}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/home/${id}`}>
                            <button>Start Quiz
                                <span className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </span>

                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;