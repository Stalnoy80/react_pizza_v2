import React, { useRef } from 'react';
import Categories from '../Categories';
import Sort, { sortList } from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Sceleton from '../Sceleton';

import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterSelector,
  filterSort,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../../redux/slices/filterSlice';
import QueryString from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPizzas } from '../../redux/slices/pizzaSlice';

const Home = () => {
  const { activeMenuState, currentPage, searchInputText } = useSelector(filterSelector);
  const selectedSortItem = useSelector(filterSort);
  const { items, status } = useSelector((state) => state.pizzaSlice);

  console.log(searchInputText);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const isSearch = useRef(false);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (id) => {
    dispatch(setCurrentPage(id));
  };

  const getPizzas = async () => {
    const categories = activeMenuState > 0 ? `category=*${activeMenuState}` : '';
    const search = searchInputText ? `title=*${searchInputText}` : '';
    // const pagination = page=1&limit=5;
    dispatch(
      fetchPizzas({
        categories,
        search,
        selectedSortItem,
        currentPage,
      }),
    );

    window.scroll(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = QueryString.stringify({
        sortProp: selectedSortItem,
        activeMenuState,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [activeMenuState, selectedSortItem, currentPage, searchInputText]);

  const pizzasMassive = () => items?.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const sceleton = [...new Array(6)].map((_, index) => <Sceleton key={index} />);

  useEffect(() => {
    if (window.location.search) {
      const params = QueryString.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProp === params.sortProp);
      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [activeMenuState, selectedSortItem, currentPage, searchInputText]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={activeMenuState} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка🥹🥹🥹</h2>
          <p>Не удалось получить пиццы! Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? sceleton : pizzasMassive()}</div>
      )}
      <Pagination currentPage={currentPage} clickOnPaginationPage={onChangePage} />
    </div>
  );
};

export default Home;
