import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './reset.css';
import './fonts.css'
import './index.css';

import Shop from './components/Shop';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Market';
import { ContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <div className='Body Flex-Column-Center'>
        <Header />
        <main className='Main Flex-Column-Center'>
          <Routes>
            <Route exact path='/' element={
            <ContextProvider>
              <Home quantityCards={4} />
            </ContextProvider>
            } />
            <Route path='about' element={<About />} />
            <Route path='market' element={
              <ContextProvider>
                <Shop quantityCards={8} />
              </ContextProvider>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </React.StrictMode>
  </HashRouter>
);

