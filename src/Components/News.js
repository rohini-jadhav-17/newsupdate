import React, { useEffect, useContext } from 'react';
import NewsItem from './NewsItem';

import NewsContext from '../context/news/newsContext';

const News = ({title, cateogry}) => {
    const newsContext = useContext(NewsContext);
    const { news, getNews } = newsContext;
    useEffect(() => {
        getNews();
        // console.log(news);
        // eslint-disable-next-line
    }, []);
    
    
    return (
        <div className="container m-top">
            <h1 className="text-upper">{title} <span className="text-primary">{cateogry}</span></h1>
            <hr className="bottom-line"></hr>
            {news.map(article => (                
                    <NewsItem key={article.publishedAt} article={article} />                
            ))}
        </div>
    )
}

News.defaultProps = {
    title: 'Latest in',
    cateogry: 'Tech'
}

export default News;
