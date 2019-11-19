//Program will take a list array of stock prices and return the most efficient profit

//calculate how much profit and return value
function handleProfit (buy, sell) {
    return sell - buy 
}

function getMaxProfit (stockPrices) {
    profit = findHighestProfit(stockPrices, 0)
    return profit
}

function findHighestProfit(array, highProfit = 0) {
    if (array.length === 1) {
        return highProfit
    }

    //calculate profits
    else{
        let start = array[0];
        let highestNum = array[1];

        //find highest number for profit
        for (i = 1; i < array.length; i++){
            if (array[i] > highestNum) {
                highestNum = array[i];
            }
        }
        profit = handleProfit(start, highestNum)
        if (profit > highProfit) {
            return findHighestProfit(array.slice(1, array.length), profit)
        }
        else {
            return findHighestProfit(array.slice(1, array.length), highProfit)
        }
    }
}

const fetch = require("./fetchfunction")
const stockPrices = [10, 7, 5, 8, 11, 9];
let api;
let url = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=9eLj71kTKY1GKMStdknrBQBJBuphat2OX3qCcWez25RaSuZLoMUkpAEKJUQl"
console.log(getMaxProfit(stockPrices))

//let data = fetch.fetchData(url)

//.then(res => res.json())
//.then(json => api = JSON.stringify(json));
