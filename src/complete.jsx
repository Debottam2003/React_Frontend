import React from 'react';
import Side from './side';
import Header from './header';
import Hero from './hero';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
     <Header />
     <div className="body">
        <Outlet />
        <Side />
      </div>
     <Footer />
    </>

  );
};

export default Layout;
