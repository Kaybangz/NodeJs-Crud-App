const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config({ path: "config.env" });
const PORT = 3000 || process.env.PORT;

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/css", express.static(path.resolve(__dirname, "assets/css/")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js/")));


app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (err) => {
  console.log(`Now listening at port ${PORT}...`);
});
