const j5 = require("johnny-five");
const Raspi = require("raspi-io");
const board = new j5.Board({
  io: new Raspi()
});

module.exports = {
  board,
  j5,
};
