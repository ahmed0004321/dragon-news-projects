import React, { useState } from 'react';
import { BiShare, BiVideo } from 'react-icons/bi';
import { CiBookmarkCheck } from 'react-icons/ci';
import { FaEye, FaRegClock, FaStar, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NewsCard = ({ news }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    const fallbackImg = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000";

    return (
        <div className="bg-base-100 mb-12 group border-b border-base-300 pb-10 last:border-0 animate-fade-in">
            {/* Header Meta */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    {news?.is_live && (
                        <div className="flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase animate-pulse">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            Live
                        </div>
                    )}
                    <span className="bg-secondary text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        {news?.rating?.badge || 'Global'}
                    </span>
                    <span className="text-[11px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5 border-l border-base-300 pl-3">
                        <FaRegClock className="text-[10px]" /> 5 Min Read
                    </span>
                    {news?.country && (
                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] border-l border-base-300 pl-3">
                            {news.country}
                        </span>
                    )}
                </div>
                {/* Social Share Shortcuts */}
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-black uppercase text-accent tracking-tighter">Share:</span>
                    <FaTwitter className="text-accent hover:text-[#1DA1F2] cursor-pointer text-xs" />
                    <FaFacebook className="text-accent hover:text-[#1877F2] cursor-pointer text-xs" />
                    <FaLinkedin className="text-accent hover:text-[#0A66C2] cursor-pointer text-xs" />
                </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <img 
                        className='w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 border border-base-300' 
                        src={news?.author?.img} 
                        alt={news?.author?.name} 
                        loading="lazy"
                    />
                    <div>
                        <h3 className="text-xs font-black text-primary uppercase tracking-tight">{news?.author?.name}</h3>
                        <p className="text-[10px] text-accent font-bold uppercase">
                            {news?.author?.published_date ? new Date(news.author.published_date).toLocaleDateString(undefined, { dateStyle: 'medium' }) : 'Today'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-base-200 rounded-full text-accent transition-colors">
                        <CiBookmarkCheck size={20}></CiBookmarkCheck>
                    </button>
                    <button className="p-2 hover:bg-base-200 rounded-full text-accent transition-colors">
                        <BiShare size={20}></BiShare>
                    </button>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-primary leading-[1.2] group-hover:text-secondary transition-colors cursor-pointer font-serif">
                    {news?.title}
                </h2>

                <div className="relative w-full aspect-video rounded-sm mb-2 overflow-hidden bg-base-200 border border-base-300">
                    {!imgLoaded && !imgError && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="loading loading-spinner loading-md text-secondary"></span>
                        </div>
                    )}
                    <img
                        src={imgError ? fallbackImg : news?.image_url}
                        alt={news?.title}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                    />
                    {news?.others?.is_video && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-all">
                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                                <BiVideo size={32} className="text-secondary ml-1" />
                            </div>
                        </div>
                    )}
                </div>

                <p className="text-[0.95rem] text-primary/70 leading-relaxed line-clamp-3 mb-2">
                    {news?.details}
                </p>

                <NavLink 
                    to={`/news-details/${news?.id}`} 
                    state={{ news }}
                    className="text-primary font-black text-xs uppercase tracking-widest border-b-2 border-secondary w-fit pb-1 hover:border-primary transition-all"
                >
                    Continue Reading
                </NavLink>
            </div>

            {/* Interaction Footer */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-base-300">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`text-xs ${i < Math.floor(news?.rating?.number || 0) ? 'text-secondary' : 'text-base-300'}`} />
                        ))}
                    </div>
                    <span className="text-[11px] font-bold text-primary tracking-tighter italic">Score: {news?.rating?.number}</span>
                </div>
                <div className="flex items-center gap-2 text-accent font-black uppercase text-[10px] tracking-widest">
                    <FaEye className="text-secondary/80 text-xs"></FaEye>
                    <span>{news?.total_view?.toLocaleString()} Impressions</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;