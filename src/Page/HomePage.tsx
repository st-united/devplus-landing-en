import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';

import HeaderDevplus from '../component/HeaderDevplus';
import './HomePage.css';

const HomePage = () => {
  const location = useLocation();
  
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'Home';
    if (path === '/whatwedo') return 'WhatWeDo';
    if (path === '/whatwedo/universities') return 'WhatWeDoUniversities';
    if (path === '/whatwedo/companies') return 'WhatWeDoCompanies';
    if (path === '/whoweare') return 'WhoWeAre';
    if (path === '/products' || path === '/Products') return 'OurProducts';
    if (path === '/products/AICP' || path === '/Products/AICP') return 'ProductAICP';
    if (path === '/products/LMS' || path === '/Products/LMS') return 'ProductLMS';
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
