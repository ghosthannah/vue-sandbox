"use strict";

var express = require("express"),
  path = require("path"),
  pkg = require("./package.json"),
  expressHandlebars = require("express-handlebars"),
  app = express(),
  PORT = process.env.PORT || 3000;

app.engine("html", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "html");
app.use(
  "/",
  express.static(path.resolve(__dirname, "dist"), { fallthrough: false })
);

app.disable("x-powered-by");

app.get("/*", function(request, response) {
  response.header("X-UA-Compatible", "IE=edge");
  response.header("Access-Control-Allow-Origin", "*"); // update to reflect your domain
  //response.header("Content-Security-Policy", "*"); // update CSP to reflect allowed urls
  response.header("X-Frame-Options", "SAMEORIGIN");
  response.header("X-XSS-Protection", "1; mode=block");
  response.header(
    "Strict-Transport-Security",
    "max-age=63072000;includeSubDomains"
  );

  response.render(path.resolve(__dirname, "dist", "index.html"), {
    layout: false
  });
});

app.use(function(request, response) {
  response.status(404).send("Sorry! Not Found!");
});

app.use(function(error, request, response) {
  if (error.statusCode) {
    console.error(error);
    response.status(error.statusCode).send("Unknown error");
  } else {
    console.error(error.stack);
    response.status(500).send("Internal server error");
  }
});

app.listen(PORT, function() {
  var address = this.address();
  console.info("Server started for " + pkg.name + " on port " + address.port);
});
