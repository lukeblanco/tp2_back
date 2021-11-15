import axios from "axios";

const URL_EXCHANGE =
  "http://rest.coinapi.io/v1/exchangerate/ETH/ARS?apikey=14B6A807-36B4-4F1A-80C6-1A67A773681A";

export default class exchange {
  exchangeEth = async (cantidad) => {
    try {
      var exchange = await axios.get(URL_EXCHANGE).then((response) => {
        return response.data.rate;
      });
    } catch (error) {
      throw new Error(`ERROR_EXCHENGE ${error.message}`);
    }
    return cantidad * exchange;
  };
}
