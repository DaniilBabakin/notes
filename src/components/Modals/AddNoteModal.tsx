import { Modal, Input, Space, notification } from 'antd';
import { ChangeEvent, useCallback, useState } from 'react';
import { addNoteToDB } from 'utils/workWithDb';

type AddNoteModalType = {
  isModalOpen: boolean;
  setIsModalOpen: (modalState: boolean) => void;
};

export const AddNoteModal = ({ isModalOpen, setIsModalOpen }: AddNoteModalType) => {
  const [noteState, setNoteState] = useState({ title: '', text: '' });

  const onChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNoteState({ ...noteState, title: e.target.value });
    },
    [noteState],
  );

  const onChangeText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNoteState({ ...noteState, text: e.target.value });
    },
    [noteState],
  );

  const handleSubmit = useCallback(() => {
    if (!noteState.title) {
      notification['error']({
        message: 'Enter note title!',
        duration: 2.5,
      });
    } else {
      addNoteToDB({ title: noteState.title, text: noteState.text, data: Date.now() });
      setIsModalOpen(false);
    }
  }, [noteState, setIsModalOpen]);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  return (
    <Modal title='Create new note' open={isModalOpen} onOk={handleSubmit} onCancel={handleCancel}>
      <Space size={20} direction='vertical' style={{ width: '100%', marginTop: '20px' }}>
        <Input placeholder='Enter note title' allowClear onChange={onChangeTitle} />
        <Input placeholder='Note text' allowClear onChange={onChangeText} />
      </Space>
    </Modal>
  );
};
