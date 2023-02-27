import express from "express";
import colors from "colors";
import dotenv from "dotenv";
const app = express();

//configure env variables
dotenv.config();

//rest api
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

//Port
const port = process.env.PORT || 8080;

//Server configuration
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${port}`.bgCyan.white);
  }
});
