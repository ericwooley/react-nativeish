var shelljs = require("shelljs");
var chokidar = require("chokidar");
var path = require("path");
var [, , dest] = process.argv;
var componentsPath = path.join(__dirname, "../../packages/components/");

var initTime = Date.now();
function sync(event, filePath, skipTimeCheck) {
  if (skipTimeCheck === true) {
  } else {
    // chikidar adds all files at the begging, so don't sync for the first two seconds.
    if (Date.now() - initTime < 2000) return;
    console.log("event: ", event, "file:", filePath);
  }
  shelljs.exec(
    "rsync -av --exclude=node_modules package.json .* " + componentsPath + " " + dest,
    { async: true }
  );
}
sync(null, null, true);
chokidar.watch(componentsPath, { ignored: /node_modules|package.json|\.*/ }).on("all", sync);
