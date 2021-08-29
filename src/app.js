// require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV, PORT, DB_URL } = require("./config");
// const bodyParser = require("body-parser")
const app = express();

// const db = knex({
//   client: "pg",
//   connection: DB_URL,
// });

// app.set("db", db);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const morganOption = NODE_ENV === "production" ? "tiny" : "common";

//middleware
app.use(cors());
app.use(morgan(morganOption));
app.use(helmet());
app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

//routers
// const traitRouter = require('./routes/trait-router')

//services
// app.use(traitRouter)

// const knexTest = db.select().table("all_traits")

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
