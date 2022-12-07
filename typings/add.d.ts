declare global {
  export type AppContext = {
    editMode: boolean;
    setEditMode: Dispatch<SetStateAction<boolean>>;
    currentNote: NotesDBType | null;
    setCurrentNote: Dispatch<SetStateAction<NotesDBType>>;
    notes: NotesDBType[];
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
  };

  export type NotesDBType = {
    id?: number;
    title: string;
    data: number;
    text: string;
  };
  module '*.scss';
  module '*.png';
}
export {};
