import React from 'react';

const NewsDetail = (props) => {
  
  // console.log(props.location.state.article);
  const{author, content, description, publishedAt, title, urlToImage, url} = props.location.state.article;

  const getTime = () =>{
    let date = new Date(publishedAt);
    let shortMonth = date.toLocaleString('en-us', {month: 'short'});
    return `${shortMonth} ${date.getDate()}, ${date.getFullYear()}`;//prints expected format.
}
      
    return (
        <div className="container p-2">
          <h2>{title}</h2>
          <p className="text-light"><i className="fas fa-user"></i> By <strong className="text-dark">{author}</strong> - {getTime()}</p>
          <i className="fab fa-facebook-f btn btn-lg btn-facebook"></i><i className="fab fa-twitter btn btn-lg btn-twitter"></i><i className="fab fa-pinterest btn btn-lg btn-pinterest"></i>
          <img className="my-2" src={urlToImage} alt="newsDetails" />
          <p className="p-1">{content}</p>
          <p className="p-1">{description}</p>
        </div>
    )
}

export default NewsDetail;
