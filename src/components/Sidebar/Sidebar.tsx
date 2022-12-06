import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  return (
    <Sider width={'15vw'} style={{ borderRight: '1px solid var(--border-gray-color)' }}>
      <Menu mode='inline' style={{ height: '100%', background: 'var(--background-sider)' }}></Menu>
    </Sider>
  );
};
