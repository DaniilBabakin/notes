import { Layout, Menu } from 'antd';
import { MenuItem } from './MenuItem/MenuItem';
import { useContext } from 'react';
import { Context } from 'app/context';
const { Sider } = Layout;

export const Sidebar = () => {
  const { notes, setCurrentNote, currentNote, searchQuery } = useContext(Context);
  
  const handleSetCurrentNote = (item: NotesDBType) => {
    setCurrentNote(item);
  };

  return (
    <Sider width={'15vw'} style={{ borderRight: '1px solid var(--border-gray-color)' }}>
      <Menu
        mode='inline'
        style={{ height: '100%', background: 'var(--background-sider)', overflow: 'auto' }}
      >
        {notes
          .sort((a, b) => b.data - a.data)
          .filter((item) => item.title.startsWith(searchQuery))
          .map((item) => (
            <MenuItem
              item={item}
              key={item.data}
              handleClick={handleSetCurrentNote}
              isCurrent={currentNote?.id === item.id}
            />
          ))}
      </Menu>
    </Sider>
  );
};
