const express = require("express");
const app = express();

const time = new Date().getHours();

app.use(
  (date = (req, res, next) => {
    if (time < 08 || time >= 17)
      res.send("<h2>Our office is closed now</h2>");
    else next();
  })
);

app.get("/", (req, res) => {
  if (time < 08 || time >= 17) res.send("<h2>Our office is closed now</h2>");
  else {
    res.sendFile(__dirname + "/public/home.html");
  }
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, (err) => {
  if (err) console.log("Server is not running");
  else console.log("Server is running on port 3000...");
});
