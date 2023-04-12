const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/useRoutes");
const bodyParser = require("body-parser");

//imported from db.js
const connectDB = require("./config/connectdb");

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
app.use("/api/user", userRoute);

app.listen(8800);
console.log("listen is ok");
