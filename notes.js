const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const addNote =  (title, body)=> {
   const notes=loadNotes();
   const duplicateNotes = notes.filter((note)=> note.title === title);
   if(duplicateNotes.length === 0){
      notes.push({
         title: title,
         body: body
      });   
      saveNotes(notes);
      console.log(chalk.green.inverse('Note added successfully'));
   } else{
         console.log(chalk.red.inverse('title already exist'));
   };
    
}
const saveNotes =  (notes) => {
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes =  () =>{
   try{
   const dataBuffer = fs.readFileSync('notes.json');
   const dataJSON = dataBuffer.toString();
   return JSON.parse(dataJSON);
   }catch(e){
         return [];
      }
}
const removeNote = (title) => {
   //console.log(title);
   const notes = loadNotes();
   const notesToKeep = notes.filter((note)=>{
         return note.title !== title;
});
   if(notesToKeep.length < notes.length){
      console.log(chalk.green.inverse.bold('Note removed successfully'));
      saveNotes(notesToKeep);
      }
   else{
      
      console.log(chalk.red.inverse.bold('No note found'));
   }  
};
const listNotes = () => {
   const notes = loadNotes();
   debugger
   console.log(chalk.green.inverse.bold('Your notes'));
   notes.forEach((note) => {
      console.log(note.title);
   })
}

const readNotes = (title) => {
   const notes = loadNotes();
   const note = notes.find((notes) => notes.title == title);
   if(note) {
      console.log(note.title);
      console.log(note.body);
   }
   else{
      console.log(chalk.red.inverse.bold('No notes found'));
}
}


module.exports = {
      addNote: addNote,
      removeNote: removeNote,
      listNotes: listNotes,
      readNotes: readNotes
}
