var blessed = require("blessed");

function initScreen(options) {
  return blessed.screen(
    Object.assign(
      {},
      {
        smartCSR: true,
        // log: process.env.HOME + "/blessed-terminal.log",
        fullUnicode: true,
        dockBorders: true,
        ignoreDockContrast: true
      },
      options
    )
  );
}
module.exports.initScreen = initScreen;
