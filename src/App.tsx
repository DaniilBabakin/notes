import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components/Header/Header';

import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Workspace } from './components/Workspace/Workspace';

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
