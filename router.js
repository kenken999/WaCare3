var requestHandlers = require("./requestHandlers");

function route(pathname, response, request){
  console.log("About to route a request for " + pathname);
  if (pathname === "/start") {
    requestHandlers.start(response);
  }
  else if (pathname === "/home") {
    requestHandlers.home(response, request);
  }
  else if (pathname === "/login") {
    requestHandlers.login(response, request);
  }
  else if (pathname === "/logout") {
    requestHandlers.logout(response, request);
  }
  else if (pathname === "/certification") {
    requestHandlers.certification(response, request);
  }
  else if (pathname === "/checkActivity") {
    requestHandlers.checkActivity(response, request);
  }
  else if (pathname === "/checkView") {
    requestHandlers.checkView(response, request);
  }
  else if (pathname === "/sendmailx") {
    requestHandlers.sendmailx();
  }
  else if (pathname === "/systemSettings") {
    requestHandlers.systemSettings(response, request);
  }
  else if (pathname === "/systemSettingsMail") {
    requestHandlers.systemSettingsMail(response, request);
  }
  else if (pathname === "/DefaultMailUpload") {
    requestHandlers.DefaultMailUpload(response, request);
  }
  else if (pathname === "/manuallyUploadHistoryMail") {
    requestHandlers.manuallyUploadHistoryMail(response, request);
  }
  else {
    requestHandlers.upload(response, request);
  }
}

exports.route = route;