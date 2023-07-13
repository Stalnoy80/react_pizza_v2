import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = axios.get('https://cc584a630fdf932d.mokky.ru/pizzas/' + id);
        setPizza(data);
      } catch (error) {
        alert('ошибка при получении пицц');
      }
    }
  }, []);

  return (
    <div className="pizzaFrame">
      <img src="" alt="" />
      <p>{id}</p>
      <h2>2222</h2>
    </div>
  );
};

export default FullPizza;
