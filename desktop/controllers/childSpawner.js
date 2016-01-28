var spawn = require("child_process").spawn,
  fs = require("fs"),
  fileSystemHelper = require("../helpers/fileSystemHelper.js"),
child;
var path = require("path");
var filesToExecute;

var configDump = path.resolve(path.join(__dirname, '../..', '/configurations/'));

fileSystemHelper.walk(configDump, function(err, results) {
  if (err)
    console.log(err)
  else
    filesToExecute = results;
})

scriptsSupported = [{
  "ps1" : "powershell.exe"
},{
  "bat" : "cmd.exe"
}]

module.exports = {
  run: function() {

    child = spawn("powershell.exe", filesToExecute);
    child.stdout.on("data", function(data) {
      console.log("Powershell Data: " + data);
    });
    child.stderr.on("data", function(data) {
      console.log("Powershell Errors: " + data);
    });
    child.on("exit", function() {
      console.log("Powershell Script finished");
    });
    child.stdin.end(); //end input
  }
}
