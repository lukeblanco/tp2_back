import exchange from './src/getRate/exchange.js'

const er  = new exchange()
const cantidad = 100
//export function calcRate(){
//    console.log(er)
//    return er;
//}
//

export function exchangeEth(pesos){
    console.log('lalalala')
        console.log(er.exchangeEth(pesos))
        return er;
    }