import React from 'react';

import Topbar from './layout/Topbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './layout/Footer';
import Opportunities from './components/home/Opportunities';
import Works from './pages/Works';
import Resources from './pages/Resources';
import OurProcess from './pages/OurProcess';
import ContactUs from './pages/ContactUs';

const App = () => {
  const [getlocation, setGetlocation] = React.useState('/');
  React.useEffect(() => {
    if (getlocation === '/process') {
      document.body.style.background = '#fff';
    } else if (getlocation === '/resources') {
      document.body.style.background = '#fff';
    } else {
      document.body.style.background = '#f7f4f4';
    }
  }, [getlocation]);

  return (
    <div
      className=" min-h-screen"
      style={{ maxWidth: '100%', overflowX: 'hidden' }}
    >
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route index element={<Home setGetlocation={setGetlocation} />} />
          <Route
            path="works"
            exact
            element={<Works setGetlocation={setGetlocation} />}
          />
          {/* <Route
            path="resources"
            exact
            element={<Resources setGetlocation={setGetlocation} />}
          /> */}
          <Route
            path="process"
            exact
            element={<OurProcess setGetlocation={setGetlocation} />}
          />
          <Route
            path="contact"
            exact
            element={<ContactUs setGetlocation={setGetlocation} />}
          />
        </Routes>{' '}
        <Opportunities />
        <Footer />
      </BrowserRouter>{' '}
    </div>
  );
};

export default App;
