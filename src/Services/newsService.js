const RSS_TO_JSON_BASE = "https://api.rss2json.com/v1/api.json?rss_url=";

const CATEGORY_FEEDS = {
    '0': 'http://feeds.bbci.co.uk/news/rss.xml',
    '1': 'http://feeds.bbci.co.uk/news/world/rss.xml',
    '2': 'http://feeds.bbci.co.uk/news/business/rss.xml',
    '3': 'http://feeds.bbci.co.uk/news/technology/rss.xml',
    '4': 'http://feeds.bbci.co.uk/news/health/rss.xml',
    '5': 'http://feeds.bbci.co.uk/sport/rss.xml',
    '6': 'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml',
    '7': 'http://feeds.bbci.co.uk/news/science_and_environment/rss.xml',
    '8': 'http://feeds.bbci.co.uk/news/politics/rss.xml',
    '9': 'http://feeds.bbci.co.uk/news/education/rss.xml',
};

const COUNTRY_FEEDS = {
    'USA': 'http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml',
    'UK': 'http://feeds.bbci.co.uk/news/uk/rss.xml',
    'India': 'http://feeds.bbci.co.uk/news/world/asia/india/rss.xml',
    'Bangladesh': 'http://feeds.bbci.co.uk/news/world/asia/rss.xml', // Fallback
    'China': 'http://feeds.bbci.co.uk/news/world/asia/rss.xml', // Fallback
    'UAE': 'http://feeds.bbci.co.uk/news/world/middle_east/rss.xml'
};

export const fetchRealNews = async (categoryId = '0', country = null) => {
    try {
        // If a country is selected and we are in "All News" (0) or "Breaking" (1), use country feed
        let feedUrl = CATEGORY_FEEDS[categoryId] || CATEGORY_FEEDS['0'];
        
        if (country && country !== 'World') {
            feedUrl = COUNTRY_FEEDS[country] || feedUrl;
        }

        const response = await fetch(`${RSS_TO_JSON_BASE}${encodeURIComponent(feedUrl)}`);
        const data = await response.json();

        if (data.status !== 'ok') throw new Error("Failed to fetch news");

        return data.items.map((item, index) => ({
            id: encodeURIComponent(item.guid || item.link),
            category_id: categoryId,
            country: country || "World",
            title: item.title,
            details: item.description || item.content || "Click to read the full story on BBC News.",
            image_url: item.enclosure?.link || item.thumbnail || `https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200&sig=${index}`,
            author: {
                name: item.author || "BBC News Correspondent",
                published_date: item.pubDate,
                img: `https://i.pravatar.cc/150?u=${encodeURIComponent(item.author || 'bbc')}`
            },
            rating: {
                number: (4 + Math.random()).toFixed(1),
                badge: "Verified"
            },
            total_view: Math.floor(Math.random() * 500000) + 10000,
            others: {
                is_today_pick: index < 3,
                is_trending: index < 5,
                is_video: item.link.includes('video')
            },
            link: item.link,
            tags: item.categories || ["General", categoryId]
        }));
    } catch (error) {
        console.error("News Fetch Error:", error);
        return [];
    }
};
