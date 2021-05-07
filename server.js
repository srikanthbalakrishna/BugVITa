const express = require("express");
const mongoose = require("mongoose"); //ORM to interact with MongoDB, can also use the Driver but this is easier
const bodyParser = require("body-parser");

const app = express();

//DEPRECATED - USE REACT FRONTEND
/*
app.get("/", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });
  return res.redirect("index.html"); //entry point html file
});
*/

// bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//static location
//app.use(express.static("public"));

//DB config
const db = require("./configs/keys").mongoURI;

//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/*Use routes */
//bug list routes
const bugs = require("./routes/api/bugs.js");
app.use("/api/bugs", bugs); //if the request hits this endpoint, it'll go to the above file

//users route
const users = require("./routes/api/users");
app.use("/api/users", users);

//products route
const bugs_by_product = require("./routes/api/products");
app.use("/api/products", bugs_by_product);

const port = process.env.PORT || 4000; //if environment variable found,use it, else use 4000

app.listen(port, () => console.log(`Server started on port ${port}`));
