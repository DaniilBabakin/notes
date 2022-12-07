import { Layout, Space, Button, Input, Modal } from 'antd';
import {
  FormOutlined,
  DeleteOutlined,
  SearchOutlined,
  FileAddOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { ChangeEvent, useCallback, useContext, useState } from 'react';

import './Header.scss';
import Logo from '../../assets/birchLogo.png';

import { AddNoteModal } from 'components/Modals/AddNoteModal';
import { Context } from 'app/context';
import { removeNoteFromDB } from 'utils/workWithDb';

const { Header } = Layout;
const { confirm } = Modal;

export const AppHeader = () => {
  const { setEditMode, currentNote, setCurrentNote, setSearchQuery } = useContext(Context);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenIsAddModal = useCallback(() => {
    setIsAddModalOpen(true);
  }, []);

  const handleChangeEditMode = useCallback(() => {
    setEditMode((prev: boolean) => !prev);
  }, [setEditMode]);

  const handleDelete = useCallback(() => {
    confirm({
      title: 'Are you sure delete this note?',
      icon: <ExclamationCircleFilled />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        if (currentNote && currentNote.id) {
          removeNoteFromDB(currentNote.id);
          setCurrentNote(null);
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }, [currentNote, setCurrentNote]);

  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [setSearchQuery],
  );
  return (
    <>
      <AddNoteModal isModalOpen={isAddModalOpen} setIsModalOpen={setIsAddModalOpen} />
      <Header
        className='header'
        style={{
          display: 'flex',
          zIndex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--background-white)',
          borderBottom: 'var(--border-gray)',
          boxShadow: '0 0px 8px 0 rgba(34, 60, 80, 0.1)',
        }}
      >
        <img className='logo' alt='notes logo' src={Logo} />
        <Space align='center' size={20}>
          <Button type='default' icon={<FileAddOutlined />} onClick={handleOpenIsAddModal} />
          <Button
            type='default'
            disabled={!currentNote && true}
            danger
            icon={<DeleteOutlined />}
            onClick={handleDelete}
          />
          <Button
            type='default'
            icon={<FormOutlined />}
            disabled={!currentNote && true}
            onClick={handleChangeEditMode}
          />
        </Space>
        <Space align='center'>
          <Input
            prefix={<SearchOutlined />}
            placeholder='Search'
            allowClear
            onChange={onSearch}
            style={{ width: 180 }}
          />
        </Space>
      </Header>
    </>
  );
};
