import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  clickOnPaginationPage: any;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, clickOnPaginationPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(i) => clickOnPaginationPage(i.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
