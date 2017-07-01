#!/usr/bin/env node

process.title = "nativish-dev.js";

var { red } = require("chalk");
var { initScreen } = require("../screen");
var { spawn } = require("child_process");
var path = require("path");
var { createScreenBufferStreamer } = require("../bufferDispay");
var screen = initScreen();
var shelljs = require("shelljs");
const stream = require("stream");

const errorStream = new stream.PassThrough();
let errorData = [];
// errorStream._read = () => {
//   errorStream.push(errorData.join(""));
// };
var mobilePath = path.join(
  __dirname,
  "../../packages/mobile/node_modules/react-native-components"
);
var webPath = path.join(
  __dirname,
  "../../packages/web/node_modules/react-native-components"
);

var mobileSync = shelljs.exec(
  "node " + path.join(__dirname, "./syncComponents.js") + " " + mobilePath,
  { async: true, silent: true }
);
var webSync = shelljs.exec(
  "node " + path.join(__dirname, "./syncComponents.js") + " " + webPath,
  { async: true, silent: true }
);

const errorLabels = {};

webSync.stderr.on("data", data => {
  const prependedData = formatLabel("web Rsync error") + data;
  errorStream.push(prependedData);
});

mobileSync.stderr.on("data", data => {
  const prependedData = formatLabel("mobile Rsync error") + data;
  errorStream.push(prependedData);
});

const r1 = 25;
const r2 = 50;

var mobileComponentSync = createScreenBufferStreamer(
  screen,
  mobileSync.stdout,
  {
    left: 0,
    top: 0,
    label: "mobile component sync",
    width: "50%",
    height: r1 + "%"
  }
);

var webComponentSync = createScreenBufferStreamer(screen, webSync.stdout, {
  right: 0,
  top: 0,
  label: "web component sync",
  width: "50%",
  height: r1 + "%"
});

var errors = createScreenBufferStreamer(
  screen,
  errorStream,
  {
    right: 0,
    top: r1 + "%",
    label: "errorStream",
    width: "100%",
    height: r2 + "%"
  },
  red
);

screen.key("C-q", function() {
  process.exit();
  return screen.destroy();
});

screen.render();

function formatLabel(str) {
  return ("              " + str + ": ").slice(-25);
}
