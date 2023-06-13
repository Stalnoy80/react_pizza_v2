import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

import './scss/app.scss';
import { useEffect, useState } from 'react';

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch('https://cc584a630fdf932d.mokky.ru/pizzas/')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
        console.log(arr);
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
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
