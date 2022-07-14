import axios from 'axios'
import { bitcoin_images } from '../../images';

// fetch latest news articles for bitcoin and return object with relevant data

interface NewsProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

const fetchBtcNews = async () => {
  const url = 'https://data.messari.io/api/v1/news/btc';

  // will return array of various articles with relevant data
  const { data: res } = await axios.get(url);

  // fetched array of articles is too big, only get five
  const data = res.data.slice(0, 2);

  const btc_news: NewsProps[] = data.map(item => {
    const newsPoster = bitcoin_images[Math.floor(Math.random()*bitcoin_images.length)];

    return {
      title: item.title,
      authors: item.author.name,
      image: newsPoster,
      date: item.published_at,
      url: item.url
    }
  })

  return btc_news;
}

export default fetchBtcNews;