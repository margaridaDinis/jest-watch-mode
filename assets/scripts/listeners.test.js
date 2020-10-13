import { keyUpNav, LEFT_ARROW_KEY, RIGHT_ARROW_KEY } from './listeners';
import { goToNextPage, goToPrevPage } from './navigation';

jest.mock('./navigation')

const map = {};
document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

describe('keyUpNav', () => {
  beforeAll(() => {
    keyUpNav();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('listens to left arrow key', () => {
    map.keyup({ key: LEFT_ARROW_KEY });

    expect(goToPrevPage).toHaveBeenCalled();
  });

  it('listens to right arrow key', () => {
    map.keyup({ key: RIGHT_ARROW_KEY });

    expect(goToNextPage).toHaveBeenCalled();
  });

  it('does not listen to other keys', () => {
    map.keyup({ key: 'Enter' });
    map.keyup({ key: 'Space' });
    map.keyup({ key: 'KeyG' });

    expect(goToPrevPage).not.toHaveBeenCalled();
    expect(goToNextPage).not.toHaveBeenCalled();
  });
});
