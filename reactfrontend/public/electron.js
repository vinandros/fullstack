const { app, BrowserWindow } = require("electron");
const path = require("path");
const idDev = require("electron-is-dev");

let appWindows;

function windowsBuilder() {
  appWindows = new BrowserWindow({
    width: 1200,
    height: 600,
    center: true,
    resizable: true,
    minWidth: 600,
    minHeight: 400,
    show: false,
    icon: "icon.png",
  });

  appWindows.loadURL(
    idDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  appWindows.once("ready-to-show", () => {
    appWindows.show();
  });
}

app.on("ready", windowsBuilder);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (appWindow === null) {
    windowsBuilder();
  }
});
