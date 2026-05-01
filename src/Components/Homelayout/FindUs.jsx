import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='flex flex-col gap-5'>
            <h2 className='font-black uppercase tracking-widest text-xs text-primary/70'>Stay Connected</h2>
            <div className='flex flex-col border border-base-300 rounded-xl overflow-hidden shadow-sm'>
                <a href="#" className='flex items-center gap-4 p-4 border-b border-base-200 hover:bg-base-100 transition-colors group'>
                    <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-all">
                        <FaFacebook size={20} />
                    </div>
                    <span className="font-bold text-sm text-primary">Facebook</span>
                </a>
                <a href="#" className='flex items-center gap-4 p-4 border-b border-base-200 hover:bg-base-100 transition-colors group'>
                    <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2] group-hover:bg-[#1DA1F2] group-hover:text-white transition-all">
                        <FaTwitter size={20} />
                    </div>
                    <span className="font-bold text-sm text-primary">Twitter (X)</span>
                </a>
                <a href="#" className='flex items-center gap-4 p-4 hover:bg-base-100 transition-colors group'>
                    <div className="w-10 h-10 rounded-full bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] group-hover:bg-[#E4405F] group-hover:text-white transition-all">
                        <FaInstagram size={20} />
                    </div>
                    <span className="font-bold text-sm text-primary">Instagram</span>
                </a>
            </div>
        </div>
    );
};

export default FindUs;