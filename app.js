//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

let items = ["Learn Web Developement","Learn RPA","Cloud Formation"];

app.get("/", function(req, res) {

  let day = date.getDate();
  res.render("list", {
    kindOfDay: day,
    newListIems: items
  });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function(req, res) {
  console.log("Application is listening to port 3000");
});
