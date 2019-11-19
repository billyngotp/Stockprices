let url = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=9eLj71kTKY1GKMStdknrBQBJBuphat2OX3qCcWez25RaSuZLoMUkpAEKJUQl"

async function fetchData(url = "", data = {}) {
    let stockPrices;
    
    try{ 
        const response = await fetch(url);
        stockPrices = await response.text;
        stockPrices = JSON.parse(stockPrices);
        return await stockPrices;
    }
    catch (error){
        console.error(error)
        return null;

    }
}

module.exports = fetchData;