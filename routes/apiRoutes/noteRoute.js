const router = require('express').Router();


const notes = require('../../db/db.json');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {

    res.json(notes);
});

router.post('/notes', (req, res) => {
      
   req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);

});


// need to add api/notes/id
router.delete('/notes/:id', (req, res) => {

   
    const id = req.params.id;

    res.json({
        message:'deleted',
        id: req.params.id
    })

})







module.exports = router;