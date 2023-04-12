const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

const path = require("path");
const bodyParser = require("body-parser");

//imported from db.js
const connectDB = require("./config/db");

const app = express();
app.use(
  bodyParser.json({
    parameterLimit: 100000,
    limit: "50mb",
  })
);

//Load config
dotenv.config();
connectDB();

// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));
//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postsRoute);
app.listen(8800);
console.log("listen is ok");

//body-parser:- It is the middleware and bodyParser object exposes various factories to create middlewares. All middlewares will populate the req.body property with the parsed body when the Content .
