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
const [, , mainDevCommand] = process.argv;

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

var mainDev = shelljs.exec(mainDevCommand, { async: true, silent: true });

webSync.stderr.on("data", data => {
  const prependedData = formatLabel("web Rsync error") + data;
  errorStream.push(prependedData);
});

mobileSync.stderr.on("data", data => {
  const prependedData = formatLabel("mobile Rsync error") + data;
  errorStream.push(prependedData);
});

mainDev.stderr.on("data", data => {
  const prependedData = formatLabel("dev error") + data;
  errorStream.push(prependedData);
});

const rsyncHeight = 25;
const errorRowHeight = 25;
const mainDevHeight = 50;

var mobileComponentSync = createScreenBufferStreamer(
  screen,
  mobileSync.stdout,
  {
    left: 0,
    top: 0,
    label: "mobile component sync",
    width: "50%",
    height: rsyncHeight + "%"
  }
);

var webComponentSync = createScreenBufferStreamer(screen, webSync.stdout, {
  right: 0,
  top: 0,
  label: "web component sync",
  width: "50%",
  height: rsyncHeight + "%"
});

var mainDev = createScreenBufferStreamer(screen, mainDev.stdout, {
  right: 0,
  top: rsyncHeight + "%",
  label: mainDevCommand,
  width: "100%",
  height: mainDevHeight + "%"
});

var errors = createScreenBufferStreamer(
  screen,
  errorStream,
  {
    right: 0,
    bottom: 0,
    label: "errorStream",
    width: "100%",
    height: errorRowHeight + "%"
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
