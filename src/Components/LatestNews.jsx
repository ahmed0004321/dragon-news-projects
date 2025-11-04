import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-200 bg-secondary p-3 font-semibold'>Latest</p>
            <Marquee pauseOnHover={true} speed={50}>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam harum nam alias necessitatibus error omnis atque. Accusamus officiis cupiditate quis! Magnam, fugit. Cumque iste modi perspiciatis enim architecto totam!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;