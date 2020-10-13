import pages from '../../components/pages/index.js';

export const getCurrentPage = () => {
  const params = new URLSearchParams(window?.location?.search);

  return +(params?.get('page')) || 0;
};

export const isFirstPage = (currentPage) => currentPage <= 0;

export const isLastPage = (currentPage) => currentPage >= pages.length - 1;
