import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/Homelayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams, useLocation } from 'react-router';
import { fetchRealNews } from '../Services/newsService';
import NewsCard from './NewsCard';

const NewsDetails = () => {
    const [news, setNews] = useState({});
    const [recommended, setRecommended] = useState([]);
    const { id } = useParams();
    const detailsData = useLoaderData();
    const location = useLocation();

    useEffect(() => {
        // Find main article
        if (location.state && location.state.news) {
            setNews(location.state.news);
        } else {
            const newsDetail = detailsData.find(details => 
                details.id === id || 
                details.id === encodeURIComponent(id) ||
                decodeURIComponent(details.id) === id
            );
            if (newsDetail) setNews(newsDetail);
        }

        // Fetch recommended stories
        fetchRealNews('0').then(data => {
            setRecommended(data.slice(0, 3));
        });
    }, [detailsData, id, location.state]);

    return (
        <div className="bg-base-100 min-h-screen">
            <header className='py-3'>
                <Header></Header>
            </header>
            
            <main className='mx-auto w-11/12 grid grid-cols-1 md:grid-cols-12 gap-10 py-10'>
                <section className='col-span-1 md:col-span-9'>
                    <div className="mb-10 flex items-center justify-between border-b-2 border-primary pb-4">
                        <h2 className='font-black uppercase tracking-[0.3em] text-[10px] text-primary'>
                            Exclusive Editorial / World Dispatch
                        </h2>
                    </div>
                    
                    <NewsDetailsCard news={news}></NewsDetailsCard>

                    {/* Recommended Section */}
                    <div className="mt-24">
                        <h3 className="font-black uppercase tracking-[0.4em] text-xs text-primary mb-10 border-b border-base-300 pb-4">
                            You May Also Like
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {recommended.map(item => (
                                <NewsCard key={item.id} news={item}></NewsCard>
                            ))}
                        </div>
                    </div>
                </section>

                <aside className='col-span-1 md:col-span-3'>
                    <div className="sticky top-28">
                        <RightAside></RightAside>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;