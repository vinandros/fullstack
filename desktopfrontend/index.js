const { app, BrowserWindow } = require("electron");

let appWindow;
function windowApp() {
  appWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    center: true,
    show: false,
    icon: "icon.png",
  });

  //when app is closed, clear memory
  appWindow.on("closed", () => {
    appWindow = null;
  });

  appWindow.loadFile("./index.html");

  //When app is ready
  appWindow.once("ready-to-show", () => {
    appWindow.show();
  });
}

app.on("ready", windowApp);
