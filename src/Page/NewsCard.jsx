import React from 'react';
import { BiShare } from 'react-icons/bi';
import { CiBookmarkCheck } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NewsCard = ({ news }) => {
    return (
        <div className="mt-5 w-full flex items-center justify-center">
            <div className="bg-white rounded-lg w-full shadow-md overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-base-200 mb-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm">
                            <img className='rounded-full' src={news?.author?.img} alt="" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-800">{news?.author?.name}</h3>
                            <p className="text-xs text-gray-400">{news?.author?.published_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="text-gray-600 hover:text-gray-800">
                            <CiBookmarkCheck size={24}></CiBookmarkCheck>
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                            <BiShare size={24}></BiShare>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="px-5 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 leading-snug mb-4">
                        {news?.title}
                    </h2>

                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                        <img
                            src={news?.image_url}
                            alt="News thumbnail"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Meta */}
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    {news?.details}
                    </p>

                    {/* Read More */}
                    <NavLink to={`/news-details/${news?.id}`} className="text-orange-500 text-sm font-semibold inline-block mb-4 hover:text-orange-600">
                        Read More
                    </NavLink>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-orange-400 text-base">★</span>
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{news?.rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <FaEye></FaEye>
                        <span className="text-sm">{news?.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;