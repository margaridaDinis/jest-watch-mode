import { goToNextPage, goToPrevPage } from './navigation.js';

export const LEFT_ARROW_KEY = 'ArrowLeft';
export const RIGHT_ARROW_KEY = 'ArrowRight';

export const keyUpNav = () => {
  document.addEventListener('keyup', event => {
    switch (event.key) {
      case LEFT_ARROW_KEY:
        return goToPrevPage();
      case RIGHT_ARROW_KEY:
        return goToNextPage();
      default:
        return;
    }
  });
};
