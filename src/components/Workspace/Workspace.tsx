import { Layout } from 'antd';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useCallback, useContext } from 'react';
import Markdown from 'marked-react';
import { Context } from 'app/context';
import { updateNote } from 'utils/workWithDb';
const { Content } = Layout;

export const Workspace = () => {
  const { currentNote, setCurrentNote, editMode } = useContext(Context);

  const onChange = useCallback(
    (value: string) => {
      if (currentNote) {
        updateNote({ ...currentNote, text: value });
        setCurrentNote({ ...currentNote, text: value });
      }
    },
    [currentNote, setCurrentNote],
  );

  return (
    <Layout>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: 'var(--background-white)',
        }}
      >
        {currentNote &&
          (editMode ? (
            <SimpleMdeReact value={currentNote?.text} onChange={onChange} />
          ) : (
            <Markdown value={currentNote?.text} />
          ))}
      </Content>
    </Layout>
  );
};
