const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const expressValidator = require("express-validator");

dotenv.config();
//db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("db connected"));

mongoose.connection.on("error", err => {
  console.log("DB Connection error: ${err.message}");
});

app.use(express.static(path.join(__dirname, "/FRONTEND/build")));

// app.get("/", function(req, res) {
//   res.sendFile(path.resolve("build/index.html"), function(err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

//
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use("/api", postRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use('/sitemap', express.static(path.join(__dirname, 'sitemap.xml')))
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ Error: "Unauthorised user" });
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`A Node JS API is listening on port: ${port}`);
});
