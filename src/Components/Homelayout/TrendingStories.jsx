import React from 'react';
import { FaFire } from 'react-icons/fa';

const TrendingStories = () => {
    const stories = [
        { id: 1, title: "SpaceX Starship Lands on Mars: First Photos", rank: "01" },
        { id: 2, title: "Apple Neural AR Glasses: Pre-orders Open", rank: "02" },
        { id: 3, title: "Global Coal Phase-out by 2030 Agreed", rank: "03" },
        { id: 4, title: "Lakers vs Celtics: The Final Showdown", rank: "04" },
        { id: 5, title: "New Alzheimer's Cure Hits Trials", rank: "05" }
    ];

    return (
        <div className="bg-white border border-base-300 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
                <FaFire className="text-secondary" />
                <h2 className='font-black uppercase tracking-widest text-xs text-primary/70'>Trending Now</h2>
            </div>
            
            <div className="flex flex-col gap-5">
                {stories.map(story => (
                    <div key={story.id} className="flex gap-4 group cursor-pointer">
                        <span className="text-2xl font-black text-base-300 group-hover:text-secondary transition-colors font-serif">
                            {story.rank}
                        </span>
                        <p className="text-sm font-bold text-primary leading-tight group-hover:underline transition-all">
                            {story.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingStories;
