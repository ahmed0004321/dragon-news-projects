import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';

const Header = () => {
    return (
        <div className='flex flex-col items-center gap-6 py-8 mx-auto w-11/12 editorial-divider mb-10'>
            {/* Top Bar for Weather & Login info */}
            <div className="w-full flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-accent mb-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 border-r border-base-300 pr-4">
                        <WiDaySunny className="text-xl text-yellow-500" />
                        <span>Dhaka: 32°C</span>
                    </div>
                    <span>Friday, May 1, 2026</span>
                </div>
                <div className="flex gap-4">
                    <span className="hover:text-secondary cursor-pointer transition-colors">Paper Edition</span>
                    <span className="hover:text-secondary cursor-pointer transition-colors">Support</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <p className='text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2'>Worldwide Independent Journal</p>
                <div className="hover:opacity-90 transition-opacity cursor-pointer">
                    <img className='w-[420px]' src={logo} alt="Dragon News Logo" />
                </div>
            </div>
            
            <div className="w-full flex items-center justify-between border-y border-base-300 py-3 mt-4 text-xs font-medium italic text-accent px-4 bg-base-100/50">
                <div className="flex items-center gap-6">
                    <p className='text-primary not-italic font-black uppercase tracking-tighter border-r border-base-300 pr-6'>
                        Market Index: <span className='text-green-600'>+1.24% ▲</span>
                    </p>
                    <p className='text-primary not-italic font-black uppercase tracking-tighter'>
                        Trending: <span className='text-secondary italic'>Global Labor Unrest</span>
                    </p>
                </div>
                <p className="font-bold uppercase tracking-widest text-[9px]">Volume: CLXIX No. 58,124</p>
            </div>
        </div>
    );
};

export default Header;