import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useSearchParams } from 'react-router';
import NewsCard from './NewsCard';
import { fetchRealNews } from '../Services/newsService';
import Loading from '../Components/Loading';

const Categorynews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const countryFilter = searchParams.get('country');
    
    const categoryNames = {
        '0': 'The World Journal',
        '1': 'Global Breaking',
        '2': 'Market & Economy',
        '3': 'Technology & Innovation',
        '4': 'Global Health Watch',
        '5': 'Sports & Athletics',
        '6': 'Arts & Culture',
        '7': 'Science & Exploration',
        '8': 'National Politics',
        '9': 'Education Forum',
        '10': 'Modern Lifestyle'
    };

    useEffect(() => {
        const getNews = async () => {
            setLoading(true);
            const data = await fetchRealNews(id, countryFilter);
            setCategoryNews(data);
            setLoading(false);
        };
        getNews();
    }, [id, countryFilter]);

    if (loading) return <Loading />

    return (
        <div className="animate-fade-in">
            <div className="mb-8 border-b-4 border-primary pb-2 flex items-baseline justify-between">
                <div className="flex flex-col">
                    <h1 className='text-3xl font-black uppercase tracking-tighter text-primary'>
                        {categoryNames[id] || 'Archives'}
                    </h1>
                    {countryFilter && countryFilter !== 'World' && (
                        <p className="text-[10px] font-black uppercase tracking-widest text-secondary mt-1">
                            Live Edition: {countryFilter}
                        </p>
                    )}
                </div>
                <p className='text-xs font-black text-secondary uppercase tracking-[0.2em]'>
                    {categoryNews.length} Live Stories
                </p>
            </div>

            <div className='grid grid-cols-1'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
            
            {categoryNews.length === 0 && (
                <div className="text-center py-32 bg-base-100 border border-dashed border-base-300 rounded-lg">
                    <div className="max-w-xs mx-auto">
                        <p className="text-accent font-black uppercase tracking-widest text-xs mb-4">No Live Reports</p>
                        <p className="text-accent font-medium italic text-sm">We couldn't find any live reports for this section and region right now. Try switching to 'World' or another category.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categorynews;