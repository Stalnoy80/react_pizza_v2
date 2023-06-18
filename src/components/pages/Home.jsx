import React from 'react';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Sceleton from '../Sceleton';

import { useEffect, useState } from 'react';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzasLoading, setPizzasLoading] = useState(true);
  const [activeMenuState, setActiveMenuState] = useState();
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  useEffect(() => {
    fetch('https://cc584a630fdf932d.mokky.ru/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setPizzasLoading(false);
      });
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories value={activeMenuState} onClickCategory={(i) => setActiveMenuState(i)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzasLoading
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
