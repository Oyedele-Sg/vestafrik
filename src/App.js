import React from 'react';

import Topbar from './layout/Topbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './layout/Footer';
import Opportunities from './components/home/Opportunities';
import Works from './pages/Works';
import OurProcess from './pages/OurProcess';
import ContactUs from './pages/ContactUs';

const App = () => {
  React.useEffect(() => {
    if (
      window.location.pathname === '/process' ||
      window.location.pathname === '/resources'
    ) {
      document.body.style.background = '#fff';
    } else {
      document.body.style.background = '#f7f4f4';
    }
  }, []);

  return (
    <div
      className=" min-h-screen"
      style={{ maxWidth: '100%', overflowX: 'hidden' }}
    >
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="works" exact element={<Works />} />
          <Route path="process" exact element={<OurProcess />} />
          <Route path="contact" exact element={<ContactUs />} />
        </Routes>{' '}
        <Opportunities />
        <Footer />
      </BrowserRouter>{' '}
    </div>
  );
};

export default App;
