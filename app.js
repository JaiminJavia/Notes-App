// const validator = require('validator');
// console.log(validator.isEmail('123gmail.com'));
// console.log(validator.isURL('google@com'));
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');

// console.log(chalk.green.inverse.bold('Success!'));
//customize yargs version
yargs.version('1.1.0');
//read,remove,delete,list
//create Add Command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }

})
//create Remove Command
yargs.command({
    command : 'remove',
    describe : 'remove a  note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },

    handler(argv){
        notes.removeNote(argv.title);
    }
});
//create read Command
yargs.command({
    command : 'read',
    describe : 'read a  note',
    builder : {
        title : {
            describe : 'read title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
    
})
yargs.command({
    command : 'list',
    describe : 'list a  note',
    handler() {
        notes.listNotes();
    }
    
})


yargs.parse();
//console.log(yargs.argv);







// const x = require("./utils.js");
// console.log(x.multiply(5, 5));





// const fs = require('fs');
// //fs.writeFileSync('notes.txt', 'This file was created by Node.js and by jaimin javia');
// fs.appendFileSync('notes.txt', '\n This is the fourth line');
