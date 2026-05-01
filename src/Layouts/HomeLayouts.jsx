import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Homelayout/LeftAside';
import RightAside from '../Components/Homelayout/RightAside';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayouts = () => {
    return (
        <div className='bg-[#FFFFFF] min-h-screen selection:bg-secondary selection:text-white'>
            {/* Top Breaking Banner */}
            <div className="bg-primary text-white py-1.5 overflow-hidden">
                <div className="flex items-center gap-4 animate-marquee whitespace-nowrap px-4">
                    <span className="bg-secondary text-[10px] font-black uppercase px-2 py-0.5 rounded-sm">Breaking</span>
                    <p className="text-[11px] font-bold tracking-wide uppercase">
                        United States and Iran signal potential for diplomatic breakthrough amid port siege • 
                        Stock markets hit record highs as inflation data cools • 
                        Global climate summit agrees on historic 2030 coal phase-out •
                    </p>
                </div>
            </div>

            <header className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Header></Header>
                <section className='mb-8'>
                    <LatestNews></LatestNews>
                </section>
                <Navbar></Navbar>
            </header>

            <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-10'>
                    <aside className='col-span-1 md:col-span-3'>
                        <div className="sticky top-28">
                            <LeftAside></LeftAside>
                        </div>
                    </aside>
                    <section className='col-span-1 md:col-span-6'>
                        <Outlet></Outlet>
                    </section>
                    <aside className='col-span-1 md:col-span-3'>
                        <div className="sticky top-28">
                            <RightAside></RightAside>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;