import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';
import TrendingStories from './TrendingStories';

const RightAside = () => {
    return (
        <div className='flex flex-col gap-10'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            
            <TrendingStories></TrendingStories>

            {/* Newsletter Section */}
            <div className="bg-primary p-8 rounded-xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="font-serif text-2xl mb-3">The Dragon Daily</h3>
                    <p className="text-gray-400 text-sm mb-6 font-medium">Get the world's most important stories delivered to your inbox every morning.</p>
                    <div className="flex flex-col gap-3">
                        <input 
                            type="email" 
                            placeholder="email@example.com" 
                            className="bg-white/10 border border-white/20 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-secondary transition-all"
                        />
                        <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 rounded-md transition-all uppercase tracking-widest text-xs">
                            Subscribe
                        </button>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            </div>

            <QZone></QZone>
        </div>
    );
};

export default RightAside;