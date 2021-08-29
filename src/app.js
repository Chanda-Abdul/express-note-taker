const express = require("express");
const { NODE_ENV, PORT, DB_URL } = require("./config");
const app = express();
const path = require('path')
const router = express.Router()


//GET index.html
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

  //GET notes.html
  router.get('/notes',function(req,res){
    res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
  });

app.use('/', router)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
