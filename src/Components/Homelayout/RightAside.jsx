import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='flex flex-col gap-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;