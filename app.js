const yargs = require('yargs')
const notes = require('./notes.js')

// creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.removeNote(argv.title)
    }
})

//creating list command
yargs.command({
    command: 'list',
    describe: 'List the notes!',
    handler(argv) {
        notes.listNotes()
    }
})

//creating read command
yargs.command({
    command: 'read',
    describe: 'Read the note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()