// src/PageWrapper.jsx
import React from 'react';
import Header from './components/Header';
import SanityBtn from './components/SanityBtn';
import Footer from './components/Footer';
import './style/app.css';

export function PageWrapper({ children }) {
  

  return (
    <>
      <header className="header">
        <Header/>
      </header>
      <main className='container'>{children}</main>
      <SanityBtn/>
      <footer className="footer">
        <Footer/>
      </footer>
    </>
  );
}

