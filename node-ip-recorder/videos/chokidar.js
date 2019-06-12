const chokidar = require("chokidar");
const shell = require("shelljs");

chokidar.watch(".", { ignored: /(^|[\/\\])\../ }).on("add", (event, path) => {
  shell.exec("syncS3.bat");
  console.log(event, path);
});
