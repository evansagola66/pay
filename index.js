const express = require("express");
const timestamp=require('timestamp');
const app = express();

const x=5000;
app.listen(x, () => {
  console.log("Server is running");
});
const currentTimestamp=timestamp();
const message=`at: ${currentTimestamp}`;
app.get("/", (req, res) => {
  res.send(`Daraja Mpesa backend is now up  ${message}`);
});
 
