const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("server working this is homepage");
});

app.listen(4000, () => {
  console.log("server started at port 3000");
});
