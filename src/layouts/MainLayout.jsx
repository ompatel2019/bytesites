import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../tools/ScrollToTop';

const navBarLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Why Choose Us', to: '/whychooseus' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Blogs', to: '/blogs' },
];

const MainLayout = ({ consistentLayout, hoverBg }) => {
  return (
    <>
      <Navbar
        hoverBg={hoverBg}
        navBarLinks={navBarLinks}
      />

      <ScrollToTop/>

      {/* Renders whichever child route is active */}
      <Outlet />

      <Footer consistentLayout={consistentLayout} />
    </>
  );
};

export default MainLayout;
