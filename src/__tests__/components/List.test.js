import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import {
  render, within, screen, fireEvent,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import List from '../../components/List';

const symbol = 'MSFT';
const name = 'Microsoft';
const exchange = 'NASDAQ';
const getUrl = jest.fn((symbol) => symbol);

describe('Snapshot of the List component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <List symbol={symbol} name={name} exchange={exchange} getUrl={getUrl} />
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the List component', () => {
  beforeEach(() => render(
    <Router>
      <List symbol={symbol} name={name} exchange={exchange} getUrl={getUrl} />
    </Router>,
  ));

  it('should have details for each provided company', () => {
    const companyInfo = document.querySelector('.company');

    const symbol = within(companyInfo).getByText('MSFT');
    expect(symbol).toBeInTheDocument();

    const name = within(companyInfo).getByText('MSFT').nextSibling;
    expect(name).toBeInTheDocument();
    expect(name.firstChild).toHaveTextContent('Microsoft');

    const exchange = screen.getByText('NASDAQ');
    expect(exchange).toBeInTheDocument();
  });

  it("should have a button to view the company's financial model", () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/company/MSFT');
    fireEvent.click(link);
    expect(getUrl).toHaveBeenCalledTimes(1);
  });
});
