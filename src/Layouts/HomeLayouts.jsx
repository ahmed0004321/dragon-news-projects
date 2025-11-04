import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Homelayout/LeftAside';
import RightAside from '../Components/Homelayout/RightAside';
import Loading from '../Components/Loading';

const HomeLayouts = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header className='mt-5'>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-5'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 h-fit sticky top-0'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main col-span-6'>
                    {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
                </section>

                <aside className='col-span-3 h-fit sticky top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayouts;