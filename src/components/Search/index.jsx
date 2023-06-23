import React from 'react';

import styles from './Search.module.scss';
import { useContext } from 'react';
import { SearchContext } from '../../App';

const Search = () => {
  const { searchInputText, setSearchInputText } = useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 17L21 21"
          stroke="#323232"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#323232"
          strokeWidth="2"
        />
      </svg>
      <input
        value={searchInputText}
        onChange={(e) => {
          setSearchInputText(e.target.value);
        }}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchInputText && (
        <svg
          onClick={() => setSearchInputText('')}
          className={styles.close}
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Menu / Close_SM">
            <path
              id="Vector"
              d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
