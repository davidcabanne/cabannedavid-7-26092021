// [=>] IMPORT SECT.
// -
const express = require("express");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

// allows to access the file system paths
const path = require("path");

// Helmet module_
// Enhances security, protects app from various vulnerabilities such as :
// cross-site scripting, sniffing and clickjacking.
// Full doc => https://helmetjs.github.io/
const helmet = require("helmet");

// const cookieSession = require("cookie-session");
// const session = require("express-session");

// [=>] Create & Execute express App
// -
const app = express();

// [=>] Middlewares
// -
// or : http://expressjs.com/en/resources/middleware/cors.html
// CORS midWare general | default options // allows app to access to API
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// // Cookies options

// for parsing body application/json
app.use(express.json());

// cookie Parser
app.use(cookieParser());

// Helmet middleware
app.use(helmet());

// // routing manager for 'images' folder
// // middleware allows to download files in static folder
// app.use("/images", express.static(path.join(__dirname, "images")));

// jwt
// app.get("*", checkUser);
// app.get("/jwtid", requireAuth, (req, res) => {
//   res.status(200).send(res.locals.user._id);
// });

// for this route => use *dirname*Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.use((req, res, next) => {
  console.log("Requête reçue !");
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: "Votre requête a bien été reçue !" });
  next();
});

app.use((req, res, next) => {
  console.log("Réponse envoyée avec succès !");
});

// [=>] EXPORT App
// -
module.exports = app;

// [=>] LEFTOVERS
// -
// // Cookies options
// const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
// app.use(
//   session({
//     name: "session",
//     secret: process.env.SECURE_SESS,
//     cookie: {
//       secure: true,
//       httpOnly: true,
//       domain: "http://localhost:3000",
//       expires: expiryDate,
//     },
//     resave: true,
//     saveUninitialized: true,
//   })
// );
