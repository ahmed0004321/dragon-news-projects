import React from 'react';
import { FaArrowLeft, FaExternalLinkAlt, FaRegClock, FaRegCalendarAlt, FaQuoteLeft } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NewsDetailsCard = ({news}) => {
    if (!news || !news.title) return null;

    return (
        <div className="bg-base-100 border border-base-300 rounded-sm overflow-hidden animate-fade-in shadow-sm">
            {/* Editorial Header */}
            <div className="p-8 md:p-16 border-b border-base-200 bg-base-100/50">
                <div className="flex flex-wrap items-center gap-6 mb-8">
                    <span className="bg-secondary text-white text-[11px] font-black px-4 py-1.5 uppercase tracking-[0.2em] rounded-sm shadow-sm">
                        {news?.rating?.badge || 'Live Report'}
                    </span>
                    <span className="text-xs font-black text-accent uppercase tracking-[0.2em] flex items-center gap-2 border-l border-base-300 pl-6">
                        <FaRegClock className="text-secondary" /> {Math.floor(Math.random() * 10) + 2} Minute Read
                    </span>
                    <span className="text-xs font-black text-accent uppercase tracking-[0.2em] flex items-center gap-2 border-l border-base-300 pl-6">
                        <FaRegCalendarAlt className="text-secondary" /> {news?.author?.published_date ? new Date(news.author.published_date).toLocaleDateString(undefined, { dateStyle: 'medium' }) : 'Live'}
                    </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-primary leading-[1.05] mb-10 font-serif tracking-tight">
                    {news?.title}
                </h1>

                <div className="flex items-center gap-5 py-8 border-y border-base-300/50">
                    <img className="w-14 h-14 rounded-full grayscale border-2 border-base-300 shadow-md" src={news?.author?.img} alt="" />
                    <div>
                        <p className="text-sm font-black uppercase tracking-widest text-primary mb-1">{news?.author?.name}</p>
                        <p className="text-[11px] font-bold text-accent uppercase tracking-tighter">
                            Senior Foreign Correspondent / {news?.country || 'Global'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-16">
                <div className="relative mb-12">
                    <img
                        src={news?.image_url}
                        alt={news?.title}
                        className="w-full h-auto max-h-[600px] object-cover rounded-sm shadow-2xl border border-base-300"
                    />
                    <p className="mt-4 text-[10px] font-black text-accent uppercase tracking-widest text-right italic">
                        Photo: Reuters/BBC Global Media Pool
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    {/* Article Body */}
                    <div className="editorial-body text-xl text-primary/90 leading-[1.9] font-serif space-y-8">
                        <p className="first-letter:text-8xl first-letter:font-black first-letter:text-secondary first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:leading-none">
                            {news?.details}
                        </p>
                        
                        <div className="my-12 py-10 px-8 bg-base-200 border-l-8 border-secondary relative overflow-hidden">
                            <FaQuoteLeft className="absolute top-4 right-4 text-secondary/10 text-6xl" />
                            <p className="text-2xl font-bold italic text-primary leading-relaxed relative z-10">
                                "The situation is evolving rapidly as international observers gather to assess the long-term implications of today's developments."
                            </p>
                            <p className="mt-4 text-sm font-black uppercase tracking-widest text-secondary">— Editorial Analysis Team</p>
                        </div>

                        {/* Simulated "Rest of Article" to make it feel full */}
                        <p>
                            As the day progresses, more details are expected to emerge from the regional hubs. Local authorities have signaled that they are monitoring the situation closely, while international markets have already begun to react to the news.
                        </p>
                        
                        <p>
                            Legal experts and industry analysts suggest that the impact could be felt across multiple sectors, particularly in the {news?.category_id === '3' ? 'technology' : 'financial'} landscape where precedents are being challenged.
                        </p>
                    </div>
                    
                    <div className="mt-16 bg-primary p-10 rounded-xl text-white shadow-2xl">
                        <h3 className="font-serif text-3xl mb-4">Deep Dive Exploration</h3>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            For the full, interactive experience including raw data, video interviews, and high-fidelity graphics, please continue to our premium publishing partner.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a 
                                href={news?.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-secondary hover:bg-secondary/90 text-white font-black px-8 py-4 rounded-md transition-all uppercase tracking-widest text-xs flex items-center gap-3 shadow-lg"
                            >
                                Read Full Investigation on BBC <FaExternalLinkAlt size={12} />
                            </a>
                            <button className="bg-white/10 hover:bg-white/20 text-white font-black px-8 py-4 rounded-md transition-all uppercase tracking-widest text-xs border border-white/20">
                                Save to Library
                            </button>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-wrap gap-4 pt-10 border-t border-base-300">
                        {news?.tags?.map((tag, idx) => (
                            <span key={idx} className="bg-base-200 text-accent text-[11px] font-black uppercase px-5 py-2 rounded-full hover:bg-secondary hover:text-white cursor-pointer transition-all shadow-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-16">
                        <NavLink 
                            to={`/category/${news?.category_id}`} 
                            className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-[10px] hover:text-secondary transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full border-2 border-primary group-hover:border-secondary flex items-center justify-center transition-all">
                                <FaArrowLeft />
                            </div>
                            Return to Dispatch Feed
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;