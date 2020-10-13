import navigationItem from './navigationItem';

describe('navigationItem', () => {
  it('removes href if edge page nav item', () => {
    expect(navigationItem(0)).toMatchSnapshot();
  });

  it('adds active if it matches the current page', () => {
    expect(navigationItem(1)).toMatchSnapshot();
  });

  it('does not add active nor removes edge for other cases', () => {
    expect(navigationItem(13)).toMatchSnapshot();
  });
});
