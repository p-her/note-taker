const router = require('express').Router();
const { count } = require('console');
const {readFile} = require('fs');

const notes = require('../../db/db.json');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {

    res.json(notes);
});
// Develop/db/db.json
// Develop/routes/apiRoutes/noteRoute.js
router.post('/notes', (req, res) => {
      
   req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);

});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;

    

})







module.exports = router;