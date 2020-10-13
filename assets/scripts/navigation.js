import { getCurrentPage, isFirstPage, isLastPage } from './page.js';

export const goToPage = (page) => {
  window.location.replace(`${window.location.origin}?page=${page}`);
};

export const goToPrevPage = () => {
  const currentPage = getCurrentPage();

  if (isFirstPage(currentPage)) return;

  goToPage(currentPage - 1)
};

export const goToNextPage = () => {
  const currentPage = getCurrentPage();

  if (isLastPage(currentPage)) return;

  goToPage(currentPage + 1)
};
