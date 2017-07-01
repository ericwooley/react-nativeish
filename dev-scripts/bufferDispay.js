var shelljs = require("shelljs");
var blessed = require("blessed");
function createScreenBufferStreamer(
  screen,
  inputBuffer,
  options,
  textWrapper = text => text
) {
  var streamer = blessed.text(
    Object.assign(
      {},
      {
        scrollable: true,
        alwaysScroll: true,
        parent: screen,
        // left: 0,
        // top: 0,
        // width: "50%",
        mouse: true,
        // height: "50%",
        tags: true,
        border: {
          type: "line"
        }
      },
      options
    )
  );
  inputBuffer.on("data", function(data) {
    streamer.pushLine(textWrapper(data));
    streamer.scroll(Number.MAX_VALUE);
  });
  return streamer;
}
module.exports.createScreenBufferStreamer = createScreenBufferStreamer;
