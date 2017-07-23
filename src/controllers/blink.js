const { board, j5 } = require('../board');

board.on("ready", function() {
  var led = new j5.Led("P1-13");
  led.blink();
});
