import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Cart from './components/pages/Cart';
import FullPizza from './components/pages/FullPizza';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart count={undefined} />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
