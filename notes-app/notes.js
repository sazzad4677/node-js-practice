const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatesNote = notes.find((note) => note.title === title)
  if (!duplicatesNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New notes added"));
  } else {
    console.log(chalk.red.inverse("Note title already added"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes =  () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notesToKeep.length < notes.length) {
        console.log(chalk.green('Note removed'));
        saveNotes(notesToKeep)
    } else {    
        console.log(chalk.red('Note not found'))
    }
}

const listNotes = () => {
  const notes = loadNotes();
  
  console.log(chalk.inverse('Your notes'))

  notes.forEach((note) => console.log(note.title))
}

const readNotes = (title) => {
  const notes = loadNotes();
  const findNotes = notes.find((note) => note.title === title)
  if (findNotes) {
    console.log("title = "+chalk.inverse(findNotes.title))
    console.log("description = " + findNotes.body)
  }
  else{
    console.log(chalk.red.inverse("No note found"))
  }
}

module.exports = {
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
