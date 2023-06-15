import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sceleton from './components/Sceleton';
import Sort from './components/Sort';

import './scss/app.scss';
import { useEffect, useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzasLoading, setPizzasLoading] = useState(true);
  useEffect(() => {
    fetch('https://cc584a630fdf932d.mokky.ru/pizzas/')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setPizzasLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzasLoading
              ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
              : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
