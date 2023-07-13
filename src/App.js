import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './scss/app.scss';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Cart from './components/pages/Cart';
import FullPizza from './components/pages/FullPizza';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
