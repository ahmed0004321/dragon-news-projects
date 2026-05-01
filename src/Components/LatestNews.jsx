import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { fetchRealNews } from '../Services/newsService';

const LatestNews = () => {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        fetchRealNews('0').then(data => {
            setHeadlines(data.slice(0, 5));
        });
    }, []);

    return (
        <div className='ticker-container flex items-center gap-4 bg-base-100 border border-base-300 rounded-xl p-2'>
            <div className="news-badge flex-shrink-0">
                Live Now
            </div>
            <Marquee pauseOnHover={true} speed={60} gradient={true} gradientColor="white" gradientWidth={50}>
                {headlines.length > 0 ? (
                    headlines.map(news => (
                        <p key={news.id} className='font-bold text-primary/90 mr-12 hover:text-secondary cursor-pointer transition-colors text-sm uppercase tracking-tight'>
                            🌍 {news.title}
                        </p>
                    ))
                ) : (
                    <p className='font-semibold text-primary/90 mr-12'>Fetching latest global updates...</p>
                )}
            </Marquee>
        </div>
    );
};

export default LatestNews;