declare global {
  export type NotesDBType = {
    title: string;
    data: number;
    text: string;
  };
  module '*.scss';
  module '*.png';
}
export {}