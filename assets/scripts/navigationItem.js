import { getCurrentPage } from './page.js';

const navigationItem = (pageIndex) => {
  const currentPage = getCurrentPage();
  const isCurrentPage = currentPage === pageIndex;

  return (`
    <li class="${isCurrentPage ? 'active' : ''}">
      <a href="${!isCurrentPage ? `/?page=${pageIndex}` : ''}">•</a>
    </li>
  `);
}

export default navigationItem;
