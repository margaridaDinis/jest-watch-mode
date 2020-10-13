import { goToPrevPage, goToNextPage } from './navigation';
import pages from '../../components/pages/index.js';
import * as page  from './page';

page.getCurrentPage = jest.fn();

const mockedUrl = 'https://www.example.com';
const location = new URL(mockedUrl);
location.replace = jest.fn();
delete window.location;
window.location = location;

describe('goToPrevPage', () => {
  it('updates the url page param', () => {
    page.getCurrentPage.mockReturnValue(1);

    goToPrevPage();

    expect(window.location.replace).toHaveBeenCalledWith(`${mockedUrl}?page=0`);
  });

  it('does not update the url if in the first page', () => {
    page.getCurrentPage.mockReturnValue(0);

    goToPrevPage();

    expect(window.location.replace).not.toHaveBeenCalled();
  });
});

describe('goToNextPage', () => {
  it('updates the url page param', () => {
    page.getCurrentPage.mockReturnValue(3);

    goToNextPage();

    expect(window.location.replace).toHaveBeenCalledWith(`${mockedUrl}?page=4`);
  });

  it('does not update the url if in the first page', () => {
    page.getCurrentPage.mockReturnValue(pages.length);

    goToNextPage();

    expect(window.location.replace).not.toHaveBeenCalled();
  });
});
