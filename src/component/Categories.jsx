import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Categories = ({ categorie }) => {
    const { name,id,logo,total } = categorie
    return (
        <div>
            <div className="card w-9/12 bg-slate-600 hover:bg-slate-700  shadow-xl mx-8 my-4">
                <figure><img className='image-full' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p className='text-blue-500'>Total Quize:{total}</p>
                    <div className="card-actions justify-end text-blue-500">
                         <Link to={`/home/${id}`}>
                            <button>Start Quiz<ArrowRightIcon className="h-4 w-4 text-blue-500" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;