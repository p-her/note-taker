const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray){

    const note = body;
  
    notesArray.push(note);
  
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(notesArray, null, 2) 

    )

    return note;
}

function deleteNote(noteId, notesArray){
    const id = noteId;

    fs.readFile(
        path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
            const jsonData = JSON.parse(data);
            jsonData.filter(element => {
                if(element.id !== id){
                    return element;
                }
            })


        }
    )



}

module.exports = createNewNote;

