import React from 'react';
import { NavLink } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className="max-w-fit bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                src={news?.image_url}
                alt="News Thumbnail"
                className="w-full h-full object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 leading-tight mb-2">
                    {news?.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                    {news?.details}
                </p>
                <NavLink to={`/category/${news?.category_id}`} className="mt-3 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md">
                    All news in this category
                </NavLink>
            </div>
        </div>
    );
};

export default NewsDetailsCard;