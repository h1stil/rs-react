import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Form from './pages/Form';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Page404 from './pages/Page404';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
