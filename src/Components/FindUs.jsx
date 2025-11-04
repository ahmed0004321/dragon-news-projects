import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className='font-bold'>Find Us On</h2>
            <div className='flex flex-col gap-2 *:p-2'>
                <p className='btn btn-outline'><FaFacebook size={24}></FaFacebook> FaceBook</p>
                <p className='btn btn-outline'><FaTwitter size={24}></FaTwitter> Twitter</p>
                <p className='btn btn-outline'><FaInstagram size={24}></FaInstagram> Instagram</p>
            </div>
        </div>
    );
};

export default FindUs;