import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
    .then(res => res.json())
    .catch(() => []);

const Categories = () => {
    const categories = use(categoryPromise);
    
    return (
        <div className="animate-fade-in">
            <h2 className='font-black uppercase tracking-widest text-xs text-primary/70 mb-6'>Editorial Sections</h2>
            <div className='flex flex-col gap-1'>
                <NavLink 
                    to="/category/0"
                    className={({isActive}) => `
                        flex items-center justify-between py-3 px-5 rounded-lg text-sm font-bold transition-all
                        ${isActive ? 'bg-secondary text-white shadow-lg scale-[1.02]' : 'text-accent hover:bg-base-200 hover:text-primary'}
                    `}
                >
                    All Reports
                    <span className="text-[10px] opacity-70">{categories.length}</span>
                </NavLink>
                
                {categories.map(cat => (
                    <NavLink 
                        key={cat.id} 
                        to={`/category/${cat.id}`}
                        className={({isActive}) => `
                            flex items-center justify-between py-3 px-5 rounded-lg text-sm font-bold transition-all
                            ${isActive ? 'bg-secondary text-white shadow-lg scale-[1.02]' : 'text-accent hover:bg-base-200 hover:text-primary'}
                        `}
                    >
                        {cat.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;