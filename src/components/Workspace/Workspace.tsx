import { Layout } from 'antd';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useCallback, useState } from 'react';
import Markdown from 'marked-react';
const { Content } = Layout;
export const Workspace = () => {
  const [editMode] = useState(false);
  const [value, setValue] = useState('# Initial value');

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

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
        {editMode ? (
          <SimpleMdeReact value={value} onChange={onChange} />
        ) : (
          <Markdown value={value} />
        )}
      </Content>
    </Layout>
  );
};
