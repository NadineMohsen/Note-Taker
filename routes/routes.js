const fs = require('fs');
const path = require('path');

module.exports = app => {
    //read file db.json
    fs.readFile("db/db.json","utf8",(err,data)=>{
        if(err) throw err;
        var notes = JSON.parse(data);
        //setup /api/notes get route
        app.get("/api/notes",function(req,res){
             // Read the db.json file and return all saved notes as JSON.
             res.json(notes);
        });

        //setup /api/notes post route
        app.post("/api/notes",function(req,res){
            //receives a new note, adds it to existing notes in db.json
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Added a new note" + newNote.title);
        })

        //
    

    })


}