import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import {
  render, screen, within, fireEvent,
} from '@testing-library/react';
import Constituent from '../../components/NasdaqConstituent';

const symbol = 'AMZN';
const name = 'Amazon';
const sector = 'Technology';
const hq = 'U.S';
const getUrl = jest.fn((symbol) => symbol);

describe('Snapshot of the Constituent component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Constituent symbol={symbol} name={name} sector={sector} hq={hq} getUrl={getUrl} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly if hq is not provided by API', () => {
    const tree = renderer
      .create(
        <Constituent symbol={symbol} name={name} sector={sector} getUrl={getUrl} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the Constituent component', () => {
  beforeEach(() => render(
    <table>
      <tbody>
        <Constituent symbol={symbol} name={name} sector={sector} getUrl={getUrl} />
      </tbody>
    </table>,
  ));

  it('should be a table row with details in columns', () => {
    const row = screen.getByRole('row');
    const companySymbol = within(row).getByRole('rowheader');
    expect(companySymbol).toHaveTextContent(symbol);
    const companyName = within(row).getByText(symbol).nextSibling;
    expect(companyName).toBeInTheDocument();
    const companySector = within(row).getByText(name).nextSibling;
    expect(companySector).toBeInTheDocument();
  });

  it('should display ellipsis as placeholder if HQ is not provided from database', () => {
    const row = screen.getByRole('row');
    const missingHQ = within(row).getByText(sector).nextSibling;
    expect(missingHQ).toHaveTextContent('...');
  });

  it("should have a button to get data on a company's financial model", () => {
    const actionButton = screen.getByRole('button');
    expect(actionButton).toHaveProperty('type', 'button');
    expect(actionButton).toHaveTextContent('Get Data');
    fireEvent.click(actionButton);
    expect(getUrl).toHaveBeenCalledTimes(1);
  });
});
