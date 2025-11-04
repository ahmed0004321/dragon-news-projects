import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/Homelayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const [news, setNews] = useState({});

    const {id} = useParams();
    const detailsData = useLoaderData();

    useEffect(() => {
        const newsDetail = detailsData.find(details => details.id == id);
        setNews(newsDetail);
    }, [detailsData, id]);

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='mx-auto w-11/12 grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
                <h2 className='font-bold mb-5'>News Details</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
            </main>
        </div>
    );
};

export default NewsDetails;