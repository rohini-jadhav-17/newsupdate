import React, { useReducer } from 'react';
import axios from 'axios';
import newsContext from './newsContext';
import newsReducer from './newsReducer';
import {
    GET_NEWS    
} from '../types';

let newsApiKey;
if(process.env.NODE_ENV !== 'production') {
    newsApiKey = process.env.REACT_APP_API_KEY;
} else {
    newsApiKey = process.env.API_KEY;
}
const NewsState = props => {
    // getting stored news
    const savedNews = localStorage.getItem('news');
    const initialValue = JSON.parse(savedNews);
    
    const initialState = {
        news: initialValue || ""   
    }
    const [state, dispatch] = useReducer(newsReducer, initialState);  
    
    // get news
    const getNews = async () => {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${newsApiKey}`);
        // console.log(res.data.articles);
        localStorage.setItem('news',JSON.stringify(state.news));

        dispatch({
            type: GET_NEWS,
            payload: res.data.articles
        });
    }

    

      return <newsContext.Provider
        value={{
            news: state.news,
            getNews
        }}    
    >
        {props.children}
    </newsContext.Provider>
}

export default NewsState;