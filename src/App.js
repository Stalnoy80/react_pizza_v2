import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import './scss/app.scss';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Cart from './components/pages/Cart';

export const SearchContext = React.createContext('');

function App() {
  const [searchInputText, setSearchInputText] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchInputText, setSearchInputText }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
