import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ExchangeFilter from '../../components/ExchangeFilter';

const changeMarket = jest.fn(() => {});

describe('Snapshot of the ExchangeFilter Component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<ExchangeFilter filterExchange={changeMarket} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the ExchangeFilter component', () => {
  it('should display exchange markets in three main categories', () => {
    render(<ExchangeFilter filterExchange={changeMarket} />);

    const categories = screen.getAllByRole('option');
    expect(categories).toHaveLength(3);
    expect(categories.some((option) => option.textContent.match('All Markets'))).toBeTruthy();
    expect(categories.some((option) => option.textContent.match('Nasdaq Global Select'))).toBeTruthy();
    expect(categories.some((option) => option.textContent.match('New York Stock Exchange'))).toBeTruthy();
  });
});
