import axios from 'axios';

const fetchCurrBtc = async () => {
  const btc_url = 'https://data.messari.io/api/v1/assets/btc/metrics';

  const { data: btc_response } = await axios.get(btc_url);

  // actual current price is behind many layers of data
  const btc_data = btc_response.data;
  const btc_price = btc_data.market_data.price_usd as number;

  // format price
  const btc_price_formatted = btc_price.toLocaleString();
  const final_price = btc_price_formatted.slice(0, btc_price_formatted.length -1)

  console.log("fetched btc price: ", final_price);
  return final_price;
}

export default fetchCurrBtc;