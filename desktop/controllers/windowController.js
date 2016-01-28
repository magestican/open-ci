var path = require("path");
module.exports = {

  init: function(mainWindow,browserWindow) { // Create the browser window.

    mainWindow = new browserWindow({
      width: 800,
      height: 600
    });

    console.log(mainWindow);

    // and load the index.html of the app.
    mainWindow.loadURL(path.join('file://' +__dirname, '../..', '/web/index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
    return mainWindow;
  }
}
