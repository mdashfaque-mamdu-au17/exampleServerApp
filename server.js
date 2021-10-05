const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("server working this is homepage");
});

console.log(`Herokuk port number is ${process.env.PORT}`);
const prt = process.env.PORT || 4000;
app.listen(prt, () => {
  console.log(`server started at ${prt}`);
});
