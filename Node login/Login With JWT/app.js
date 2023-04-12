require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectdb.js");
const router = require("./routes/useRoutes.js");

const app = express();

//CORS Policy (cors error) - fronted & backend connced
app.use(cors());
const port = process.env.PORT;

//databse conncetion
connectDB();

//JSON
app.use(express.json());
app.use("/api/user", router);
const puppetter = require("puppeteer");
async function takeScreenShot(url, imagepath) {
  const browser = await puppetter.launch({});
  const page = await browser.newPage();

  await page.goto(url);

  await page.screenshot({ path: imagepath });

  await browser.close();
}

takeScreenShot("https://youtube.com", "youtube.png");

app.listen(port, () => console.log("running on 3100"));
