/* Algo Expert JavaScript question - trending stocks */

const SYMBOLS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-symbols';
const MARKET_CAPS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-market-caps';
const PRICES_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-prices';

async function trendingStocks(n) {
  // Write your code here.

    console.log('hello')
    //Fetch the response from the api endpoint url
    //Destructuring the response from the promise.all call
    //Promise.all takes in an array of promises
    //Get all symbols and market caps asynchronously
    const [symbolsResponse, marketCapsResponse] = await Promise.all([
      fetch(SYMBOLS_API_BASE_URL),
      fetch(MARKET_CAPS_API_BASE_URL),
    ]);

    //Parsing the json response from above
    //Two json objects: symbols, marketCaps
    const [symbols, marketCaps] = await Promise.all([

        symbolsResponse.json(),
        marketCapsResponse.json(),
    ]);
    console.log(symbols)
    console.log(marketCaps)

    //Sorting the market cap data from highest to lowest
      //.slice getting the first n elements out of the array. Slicing from 0 -> n 
    const requestedSymbols = marketCaps.sort((stockA, stockB) => {
        return stockB['market-cap'] - stockA['market-cap'];
    })
    .slice(0, n)
    .map(marketCapObj => marketCapObj.symbol);


    // Creating a url object to represent the url we are going to request to the stock 
    // prices api 
    const pricesUrl = new URL(PRICES_API_BASE_URL);

    //set the symbols parameter
    pricesUrl.searchParams.set('symbols', JSON.stringify(requestedSymbols));

    //Make the request to the prices api and parse the json()
    const pricesResponse = await fetch(pricesUrl);
    const prices = await pricesResponse.json();

    //Turning this into an object so we can see all the data together
    const namesAndMarketCapsBySymbol = getNamesAndMarketCapsBySymbol(symbols, marketCaps)

    //Creating a stock data object mapping through the prices and passing the other data
    //Parenthesis after the arrow function is an object literal
    ///We want to return an object so this is shorthand for this. 
    // normally it will open a function if no parenthesis
    const stockData = prices.map(({symbol, ...rest}) => ({
        symbol,
        ...namesAndMarketCapsBySymbol[symbol],
        ...rest,
    }));

    return stockData;
}

//Helper function
function getNamesAndMarketCapsBySymbol(symbols, marketCaps){
    const namesAndMarketCapsBySymbol = {};

    //Here we are creating a new object 
    symbols.forEach(({symbol, name}) => {
        namesAndMarketCapsBySymbol[symbol] = {name}; 
    });

    //Here we are just passing the 
    marketCaps.forEach(({symbol, 'market-cap': marketCap}) => {
        namesAndMarketCapsBySymbol[symbol]['market-cap'] = marketCap
    });

    return namesAndMarketCapsBySymbol;
}


// Do not edit the line below.
exports.trendingStocks = trendingStocks;