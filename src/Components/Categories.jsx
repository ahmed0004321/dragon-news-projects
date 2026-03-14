import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json')
.then(res => res.json());
const Categories = () => {
    const category = use(categoryPromise);
    return (
        <div>
            <p className='font-bold'>All Category <span className='text-secondary'>{category.length}</span></p>
            <div className='grid grid-cols-1 gap-3 mt-5'>
                {
                category.map(categor => 
                    <NavLink className='btn bg-base-100 border-0 hover:bg-secondary hover:text-white 
                hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg' key={categor.id} to={`/category/${categor.id}`}>{categor.name}</NavLink>
                )
                }
            </div>
        </div>
    );
};

export default Categories;