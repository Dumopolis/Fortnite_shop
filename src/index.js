import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  Routes, Route, HashRouter } from 'react-router-dom';
import Shop from './components/Shop';
import './reset.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <div className='body'>
      <Header />
      <main className='main'>
    <Routes>

    <Route exact path='/' element={<App quantity={3} />} /> 
    <Route path='about' element={<About />} /> 
    <Route path='shop' element={<Shop quantity={9} />} /> 
    </Routes>
      </main>
      <Footer />
    </div>
  </HashRouter>
);

