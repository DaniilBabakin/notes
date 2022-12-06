import { Layout, Space, Button, Input } from 'antd';
import { FormOutlined, DeleteOutlined, SearchOutlined, FileAddOutlined } from '@ant-design/icons';
import { ChangeEvent } from 'react';
import './Header.scss';
import Logo from '../../assets/birchLogo.png';
const { Header } = Layout;

export const AppHeader = () => {
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value);

  return (
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
        <Button type='default' icon={<FileAddOutlined />} />
        <Button type='default' icon={<DeleteOutlined />} />
        <Button type='default' icon={<FormOutlined />} />
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
  );
};
