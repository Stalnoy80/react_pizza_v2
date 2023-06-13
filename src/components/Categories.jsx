import React, { useState } from 'react';

const Categories = () => {
  const [activeMenuState, setActiveMenuState] = useState(0);

  const menu = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {menu.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveMenuState(i)}
            className={activeMenuState === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
