
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import News from './Components/News';
import NewsDetail from './Components/NewsDetail';

// context
import NewsState from './context/news/newsState';


const App = () => {
  // const[news, setNews] = useState(() => {
  //   // getting stored news
  //   const savedNews = localStorage.getItem('news');
  //   const initialValue = JSON.parse(savedNews);
  //   return initialValue || "";
  // });

  // useEffect(() => {
  //   console.log(process.env.REACT_APP_API_KEY);
  //   // fetching newsapi data
  //   async function fetchData() {
  //     const res = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.REACT_APP_API_KEY}`);
  //     console.log(res.data);
  //     setNews(res.data.articles);
  //   }
  //   fetchData();
  //   localStorage.setItem('news',JSON.stringify(news));
  //   // eslint-disable-next-line
  // }, []);  

  return (
    <NewsState>
      <Router>
        <Switch>
          <Route exact path="/" component={News} />
          <Route exact path='/details' component={NewsDetail} />
        </Switch>
      </Router>
    </NewsState>
  );
}

export default App;
