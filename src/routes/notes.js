const path = require("path")
const notesRouter = require("express").Router();
const store = require("../../db/store");

//GET "/notes" responds with all notes from the database
notesRouter.get("/notes", (req, res) => {
  store
    .getNotes()
    .then(res.sendFile(path.join(__dirname, '..', '..', 'public', 'notes.html')))
    // .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

//POST "/notes" saves note to the database
notesRouter.post("/notes", (req, res) => {
  store.addNote(req.body)
  .then((note) => res.json(note))
  .catch(err => res.status(500).json(err))
});

//DELETE "/notes" deletes note by id from the database
notesRouter.delete('/notes/:id', (req, res) => {
    store.removeNote(req.params.id)
    .then(()=> res.json({ ok: true}))
    .catch(err => res.status(500).json(err))
})

module.exports = notesRouter

