const express = require("express");
const { PORT } = require("./config");
const noteRouter = require('./routes/notes')
const htmlRouter = require('./routes/html')
const app = express();

app.use(express.json())
app.use(noteRouter)
app.use(htmlRouter)

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
