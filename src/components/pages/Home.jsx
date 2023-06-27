import React from 'react';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Sceleton from '../Sceleton';

import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import { useContext } from 'react';
import { SearchContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';

const Home = () => {
  const activeMenuState = useSelector((state) => state.filterSlice.activeMenuState);
  const selectedSortItem = useSelector((state) => state.filterSlice.sort.sortProp);

  const dispatch = useDispatch();

  const { searchInputText } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [pizzasIsLoading, setPizzasIsLoading] = useState(true);
  const [currentPaginationPage, setCurrentPaginationPage] = useState(1);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const pizzasMassive = pizzas
    // .filter((obj) => {
    //   return obj.title.toLowerCase().includes(searchInputText.toLowerCase()) && obj;
    // })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const sceleton = [...new Array(6)].map((_, index) => <Sceleton key={index} />);

  useEffect(() => {
    setPizzasIsLoading(true);
    const categories = activeMenuState > 0 ? `category=*${activeMenuState}` : '';
    const search = searchInputText ? `title=*${searchInputText}` : '';
    // const pagination = page=1&limit=5;

    fetch(
      `https://cc584a630fdf932d.mokky.ru/pizzas?${categories}${search}&sortBy=${selectedSortItem.sortProp}&page=${currentPaginationPage}&limit=4`,
    )
      .then((res) => {
        return res.json();
      })
      .then((pizzaObj) => {
        setPizzas(pizzaObj.items);
        setPizzasIsLoading(false);
      });
    window.scroll(0, 0);
  }, [activeMenuState, selectedSortItem, searchInputText, currentPaginationPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={activeMenuState} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzasIsLoading ? sceleton : pizzasMassive}</div>
      <Pagination clickOnPaginationPage={(i) => setCurrentPaginationPage(i)} />
    </div>
  );
};

export default Home;
