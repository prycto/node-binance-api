const Binance = require('../node-binance-api');
const binance = new Binance();

// Get all symbols
binance.prevDay(false, (error, prevDay) => {
  if (error) return console.log(error.body);

  // Subscribe to trades endpoint for all markets
  binance.websockets.depthCache(["BTCUSDT"], (symbol, depth) => {
    console.log('update ', symbol, depth.eventTime)
  })
});
