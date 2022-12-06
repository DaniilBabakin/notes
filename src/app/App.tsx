import React from 'react';
import { Layout } from 'antd';
import './App.scss';
import { AppHeader, Sidebar, Workspace } from '../components';

export const App: React.FC = () => {
  return (
    <Layout className='app'>
      <AppHeader />
      <Layout>
        <Sidebar />
        <Workspace />
      </Layout>
    </Layout>
  );
};
