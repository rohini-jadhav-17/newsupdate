const getTime = (publishedAt) =>{
    let date = new Date(publishedAt);
    let shortMonth = date.toLocaleString('en-us', {month: 'short'});
    return `${shortMonth} ${date.getDate()}, ${date.getFullYear()}`;//prints expected format.
}

export default getTime;