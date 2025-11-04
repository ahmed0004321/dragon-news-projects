import React from 'react';
import swimming from '../../assets/swimming.png';
import classes from '../../assets/class.png';
import plays from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 rounded-sm p-5'>
            <h2 className='font-bold'>Q-Zone</h2>
            <div className='flex flex-col gap-2'>
                <img src={swimming} alt="" />
                <img src={classes} alt="" />
                <img src={plays} alt="" />
            </div>
        </div>
    );
};

export default QZone;
