import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PageWrapper } from './PageWrapper';
import HomePage from './pages/home';
import Product from './pages/product';
import DetailProduct from './pages/products/ProductDetail';
import Studio from './studio/[[...index]]'

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductSection />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studio/*" element={<Studio />} />
        </Routes>
      </BrowserRouter>
    );
  }

// homepage section
  function Home() {

  useEffect(() => {
    document.title = "ReactVite || Home";
  }, []);

    return (
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    );
  }
  
// produk section
  function ProductSection() {

  useEffect(() => {
    document.title = "ReactVite || Products";
  }, []);

    return (
      <PageWrapper>
        <Product/>
      </PageWrapper>
    );
  }

// Detail Product section
  function ProductDetail() {

  useEffect(() => {
    document.title = "ReactVite || Detail Product";
  }, []);

    return (
      <PageWrapper>
        <DetailProduct/>
      </PageWrapper>
    );
  }

// contact section
  function Contact() {

  useEffect(() => {
    document.title = "ReactVite || Contact";
  }, []);

    return (
      <PageWrapper>
        <h1>Contact</h1>
        <p>Get in touch with us!</p>
      </PageWrapper>
    );
  }

  export default App