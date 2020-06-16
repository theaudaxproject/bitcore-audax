module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  AUDAX: {
    lib: require('bitcore-audax-lib'),
    p2p: require('bitcore-audax2-p2p'),
  },
}
