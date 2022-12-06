import Dexie, { Table } from 'dexie';

export class NotesDB extends Dexie {
  notes!: Table<NotesDBType, number>;
  constructor() {
    super('NotesDB');
    this.version(1).stores({
      notes: '++id, title, data, text',
    });
  }
}

export const db = new NotesDB();
