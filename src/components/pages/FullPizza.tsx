import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pizza, setPizza] = useState<{ imageUrl: string; title: string; price: number }>();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://cc584a630fdf932d.mokky.ru/pizzas/' + id);

        setPizza(data);
      } catch (error) {
        alert('ошибка при получении пицц');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <p>{id}</p>
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
