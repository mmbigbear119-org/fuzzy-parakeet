var CoinHive = require('coin-hive');
(async () => {
  var miner = await CoinHive('yykfO7ckJ9ZdYDkab4fFdg3j5hJmhlGG');

  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Yay!'))
  miner.on('accepted', () => console.log('Cool!'))
  miner.on('update', data => console.log(`Power: ${data.hashesPerSecond}, hashes: ${data.totalHashes}, accepted: ${data.acceptedHashes}`));

  // Stop miner
  var hour = 60;
  var day = 24;
  setTimeout(async () => await miner.stop(), (day * (hour * 1000)));
})();