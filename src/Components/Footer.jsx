import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 mt-20">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
                <div className="col-span-1 md:col-span-1">
                    <img src={logo} alt="Dragon News" className="w-48 mb-6 brightness-0 invert" />
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        Bringing you independent, high-quality journalism from every corner of the globe since 1982. The world's most trusted source for news.
                    </p>
                    <div className="flex gap-4">
                        <FaFacebook className="cursor-pointer hover:text-secondary transition-colors" size={20} />
                        <FaTwitter className="cursor-pointer hover:text-secondary transition-colors" size={20} />
                        <FaInstagram className="cursor-pointer hover:text-secondary transition-colors" size={20} />
                        <FaLinkedin className="cursor-pointer hover:text-secondary transition-colors" size={20} />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-300">Sections</h3>
                    <ul className="space-y-4 text-sm text-gray-400 font-medium">
                        <li className="hover:text-white cursor-pointer transition-colors">World News</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Politics & Policy</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Market & Finance</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Tech & Future</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Culture & Lifestyle</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-300">Company</h3>
                    <ul className="space-y-4 text-sm text-gray-400 font-medium">
                        <li className="hover:text-white cursor-pointer transition-colors">About Our Mission</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Editorial Standards</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Career Opportunities</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Advertising</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Contact Press</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-300">Support</h3>
                    <ul className="space-y-4 text-sm text-gray-400 font-medium">
                        <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Subscription Plans</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Gift Cards</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Accessibility</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                    </ul>
                </div>
            </div>
            
            <div className="w-11/12 mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                <p>&copy; {new Date().getFullYear()} Dragon News Media Group. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-gray-300 cursor-pointer">Cookies Policy</span>
                    <span className="hover:text-gray-300 cursor-pointer">Ad Choices</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
