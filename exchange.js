import axios from 'axios'

var options = {
  method: "GET",
  url: 'http://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=14B6A807-36B4-4F1A-80C6-1A67A773681A',
};

export default class exchange{
  constructor() {}
     obtenerRate(){
      var valor = calcRate()
      return valor;
    }

     calcRate(){
     axios.request(options).then(function (response) {
      var rate = response.data.rate
    }).catch(function (error) {
      console.error(error);
    }); 
    return rate;
    }

    
}



  