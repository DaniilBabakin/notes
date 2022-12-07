import React, { useState } from 'react';
import { Layout } from 'antd';
import './App.scss';
import { AppHeader, Sidebar, Workspace } from '../components';
import { Context } from './context';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from 'database/db';

export const App: React.FC = () => {
  const [currentNote, setCurrentNote] = useState<NotesDBType | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [notes, setNotes] = useState<NotesDBType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useLiveQuery(async () => {
    const notes = await db.notes.toArray();

    setNotes(notes);
  });

  const appContext: AppContext = {
    editMode,
    setEditMode,
    currentNote,
    setCurrentNote,
    notes,
    searchQuery,
    setSearchQuery,
  };

  return (
    <Context.Provider value={appContext}>
      <Layout className='app'>
        <AppHeader />
        <Layout>
          <Sidebar />
          <Workspace />
        </Layout>
      </Layout>
    </Context.Provider>
  );
};
