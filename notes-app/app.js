const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    description: {
      describe: "Note Description",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    return notes.addNote(argv.title, argv.description);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List of all notes",
  handler(argv) {
    notes.listNotes(argv.title);
  },
});

yargs.command({
  command: "read",
  describe: "Read the note",
  builder:{
      title:{
          describe: "Note Title",
          demandOption: true,
          type: "string",
      }
  },
  handler(argv) {
    notes.readNotes(argv.title, argv.description);
  },
});

yargs.parse();
