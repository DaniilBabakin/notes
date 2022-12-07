import { db } from 'database/db';

export const addNoteToDB = ({ data, text, title }: NotesDBType) => {
  console.log(data, text, title);
  db.notes.add({ title, data, text });
};

export const removeNoteFromDB = (id: number) => {
  db.notes.delete(id);
};

export const updateNote = (note: NotesDBType) => {
  if (note.id) {
    db.notes.update(note.id, {
      data: Date.now(),
      text: note.text,
    });
  } else {
    console.error('Cant find note with this id')
  }
};
