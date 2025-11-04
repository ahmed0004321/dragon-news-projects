import React, { useEffect, useState } from 'react';
import Categories from '../Components/Categories';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const Categorynews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const {id} = useParams();//string
    const data = useLoaderData();
    useEffect(() => {
        if(id == '0'){
            setCategoryNews(data);
            return;
        }
        else if(id == '1'){
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filterNews);
        }
        else{
            const filterNews = data.filter(news => news.category_id == id);
            setCategoryNews(filterNews);
        }
    }, [id, data]);

    return (
        <div>
            <p className='font-bold'>Category News <span className='text-secondary'>{categoryNews.length}</span></p>

            <div className='grid grid-cols-1'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Categorynews;