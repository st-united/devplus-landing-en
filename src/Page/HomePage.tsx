import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';

import HeaderDevplus from '../component/HeaderDevplus';
import './HomePage.css';

const HomePage = () => {
  const location = useLocation();
  
  // Xác định active section dựa trên route hiện tại
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'Home';
    if (path === '/whatwedo') return 'WhatWeDo';
    if (path === '/whoweare') return 'WhoWeAre';
    return 'Home';
  };

  return (
    <Layout style={{ background: '#fff2ea', minHeight: '100vh' }}>
      <div className='!z-99'>
        <HeaderDevplus activeSection={getActiveSection()} />
        <Outlet />
      </div>
    </Layout>
  );
};

export default HomePage;
