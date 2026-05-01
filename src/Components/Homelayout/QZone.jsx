import React from 'react';
import swimming from '../../assets/swimming.png';
import classes from '../../assets/class.png';
import plays from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-100 border border-base-300 rounded-xl p-6'>
            <h2 className='font-black uppercase tracking-widest text-xs text-primary/70 mb-6'>Q-Zone Archive</h2>
            <div className='flex flex-col gap-6'>
                <div className="relative group overflow-hidden rounded-lg">
                    <img src={swimming} alt="Swimming" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-white text-xs font-bold uppercase tracking-widest">Aquatics</p>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                    <img src={classes} alt="Classes" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-white text-xs font-bold uppercase tracking-widest">Education</p>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                    <img src={plays} alt="Playground" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-white text-xs font-bold uppercase tracking-widest">Recreation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QZone;
