import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { MenuItem } from './MenuItem/MenuItem';
const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={'15vw'} style={{ background: colorBgContainer, borderRight: '1px solid var(--border-gray-color)' }}>
      <Menu mode='inline' style={{ height: '100%', background: 'var(--background-sider)' }}>
        <MenuItem
          key={'523523523'}
          title={'Продукты'}
          text={'Майонез.Кетчуп.Майонез'}
          data='12:07'
        />
        <MenuItem key={'gsdg'} title={'Продукты'} text={'Майонез.Кетчуп.Майонез'} data='12:07' />
        <MenuItem key={'y45y4'} title={'Продукты'} text={'Майонез.Кетчуп.Майонез'} data='12:07' />
        <MenuItem key={'hfgh'} title={'Продукты'} text={'Майонез.Кетчуп.Майонез'} data='12:07' />
      </Menu>
    </Sider>
  );
};
