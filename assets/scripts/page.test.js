import { getCurrentPage, isFirstPage, isLastPage } from './page';
import pages from '../../components/pages/index.js';

describe('getCurrentPage', () => {
  it('returns 0 of the `page` url param is not defined', () => {
    delete window.location;
    expect(getCurrentPage()).toBe(0);
  });

  it('returns the value of `page` url param', () => {
    jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation(() => '2');

    expect(getCurrentPage()).toBe(2);
  });

  it('returns 0, if  `page` url param is not a number', () => {
    jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation(() => 'not a number');
    expect(getCurrentPage()).toBe(0);
  });
});

describe('isFirstPage', () => {
  it('returns `true`, if current page is 0 or smaller', () => {
    expect(isFirstPage(0)).toBe(true);
    expect(isFirstPage(-10)).toBe(true);
  });

  it('returns `false`, if current page is not 0', () => {
    expect(isFirstPage(2)).toBe(false);
  });
});

describe('isLastPage', () => {
  it('returns `true`, if current page is equal or bigger than the total number of pages', () => {
    expect(isLastPage(pages.length)).toBe(true);
    expect(isLastPage(pages.length + 5)).toBe(true);
  });

  it('returns `false`, if current page is smaller than the total number of pages', () => {
    expect(isLastPage(2)).toBe(false);
  });
});
