const express = require("express");
const mongoose = require("mongoose"); //ORM to interact with MongoDB, can also use the Driver but this is easier
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000; //if environment variable found,use it, else use 4000

app.listen(port, () => console.log(`Server started on port ${port}`));
