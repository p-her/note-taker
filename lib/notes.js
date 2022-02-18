const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray){

  
    const note = body;
    notesArray.push(note);
    


    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify({notes: notesArray}, null, 2) // notes is the name of the array

    )

    return note;
}

module.exports = createNewNote;

