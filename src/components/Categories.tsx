import React from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;

  getCategories?: (menu: string[]) => void;
};

const menu = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory, getCategories }) => {
  getCategories?.(menu);

  return (
    <div className="categories">
      <ul>
        {menu.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
