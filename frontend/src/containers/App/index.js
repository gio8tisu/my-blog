import React from "react";

import { Routes, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Articles from "../Articles";
import Article from "../Article";
import Writer from "../Writer";
import Category from "../Category";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} exact />
        <Route path="/article/:slug" element={<Article />} exact />
        <Route path="/category/:slug" element={<Category />} exact />
        <Route path="/writer/:slug" element={<Writer />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
