var spawn = require("child_process").spawn,
  child;
var path = require("path");

var file1 = path.resolve(path.join(__dirname, '../..', '/configurations/helloworld.ps1'));
module.exports = {
  run: function() {
    child = spawn("powershell.exe", [file1]);
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
