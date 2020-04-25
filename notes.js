const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('Note Added!'))
    } else {
        console.log(chalk.bgRed('Title already exists!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Note is removed successfully!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note with this title exists!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgBlue('Your Notes...'))
    notes.forEach(note => {
        console.log(chalk.bold(note.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const requiredNote = notes.find((note) => note.title === title)
    if(requiredNote) {
        console.log(chalk.bold.italic.bgCyan(requiredNote.title))
        console.log(requiredNote.body)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}