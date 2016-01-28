var spawn = require("child_process").spawn,
  fs = require("fs"),
  fileSystemHelper = require("../helpers/fileSystemHelper.js"),
  scriptsSupported,
  child;
var path = require("path");
var filesToExecute = [];

var configDump = path.resolve(path.join(__dirname, '../..', '/configurations/'));


scriptsSupported = [{
  extension: "ps1",
  executable: "powershell.exe"
}, {
  extension: "bat",
  executable: "cmd.exe"
}]

fileSystemHelper.walk(configDump, function(err, results) {
  if (err)
    console.log(err)
  else
    for (var i in results) {
      for (var x in scriptsSupported)
        var supported = scriptsSupported[x];
      var file = results[i];
      if (file.indexOf(.extension) > -1) {
        filesToExecute.push({
          RUN: supported.executable,
          THISFILE: file
        });
      }
    }
})

module.exports = {
  run: function() {

    for (var runthis in filesToExecute) {
      if (object.hasOwnProperty(script)) {

        child = spawn(script.RUN, script.THISFILE);
        child.stdout.on("data", function(data) {
          console.log("Data: " + data);
        });
        child.stderr.on("data", function(data) {
          console.log("Errors: " + data);
        });
        child.on("exit", function() {
          console.log("Script finished");
        });
        child.stdin.end(); //end input
      }
    }

  }
}
