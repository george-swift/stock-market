import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import {
  render, within, screen, fireEvent,
} from '@testing-library/react';
import List from '../../components/List';

const symbol = 'MSFT';
const name = 'Microsoft';
const exchange = 'NASDAQ';
const getUrl = jest.fn((symbol) => symbol);

describe('Snapshot of the List component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <List symbol={symbol} name={name} exchange={exchange} getUrl={getUrl} />,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the List component', () => {
  beforeEach(() => render(
    <List symbol={symbol} name={name} exchange={exchange} getUrl={getUrl} />,
  ));

  it('should have details for each provided company', () => {
    const companyInfo = document.querySelector('.company');

    const symbol = within(companyInfo).getByText('MSFT');
    expect(symbol).toBeInTheDocument();

    const name = within(companyInfo).getByText('MSFT').nextSibling;
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent('Microsoft');

    const exchange = within(companyInfo).getByText('Microsoft').nextSibling;
    expect(exchange).toBeInTheDocument();
    expect(exchange).toHaveTextContent('NASDAQ');
  });

  it("should have a button to view the company's financial model", () => {
    const button = screen.getByRole('button');
    expect(button).toHaveProperty('type', 'button');
    expect(button).toHaveTextContent('See Profile');
    fireEvent.click(button);
    expect(getUrl).toHaveBeenCalledTimes(1);
  });
});
