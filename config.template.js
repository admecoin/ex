
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': '37.143.9.111 ',
    'port': '3000',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'https://api.crex24.com/v2/public/tickers?instrument=',
    'ticker': 'SAq-BTC'
  },
    'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'timeismoney'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'blockeqx',
    'user': 'blockexuqser',
    'pass': 'Exploreqr!1'
  },
  'freegeoip': {
    'api': 'http://freegeoip.net/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '11334',
    'user': '$rpcuser',
    'pass': '$rpcpassword',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
