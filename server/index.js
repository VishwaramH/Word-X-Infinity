const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send({ message: "Hello nanba!" });
});

app.get("*", (req, res) => {
  res.send({ error: "Invalid endpoint!" });
});

app.listen(port, (req, res) => {
  console.log(`WXI server runnig at port ${port}`);
});
