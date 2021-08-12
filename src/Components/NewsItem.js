import React from 'react';
import { Link } from 'react-router-dom';
import NewsDetail from './NewsDetail';

const NewsItem = ({article}) => {
    const getTime = () =>{
        let date = new Date(article.publishedAt);
        let shortMonth = date.toLocaleString('en-us', {month: 'short'});
        return `${shortMonth} ${date.getDate()}, ${date.getFullYear()}`;//prints expected format.
    }
    
    return (
            <>
            <div className="grid-2 my-1">
                <div>
                    <img src={article.urlToImage} alt="newsimg" />
                </div>
                
                <Link to={{pathname:"/details", state:{article}}} onClick={() => {
                    // console.log(article);
                    <NewsDetail />
                }}>
                    <div className="my-2">
                        <h2>{article.title}</h2>
                        <p className="text-light">By <strong className="text-dark">{article.author}</strong> - {getTime()}</p>
                        <p>{article.description}</p>                
                    </div>
                </Link>
            </div>
            <hr className="text-exlight"></hr>
            </>
    )
}

export default NewsItem;
