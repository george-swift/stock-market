import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Model from '../../components/Model';

const company = {
  symbol: 'TS',
  companyName: 'Test Co',
  ceo: 'Devs',
  website: 'www.test.com',
  ipoDate: '2021-07-31',
  industry: 'SF',
  sector: 'Tech',
  fullTimeEmployees: '1000',
  price: 10,
  changes: 2,
  volAvg: 1255,
  mktCap: 5000,
  dcf: 8,
  description: 'Test componany for Model',
};

describe('Snapshot of the Model component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Model company={company} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the Model component', () => {
  beforeEach(() => render(<Model company={company} />));

  it('should have nodes for company name, ceo and website', () => {
    const companyName = screen.getByText('Company Name:').nextSibling.nextSibling;
    expect(companyName).toHaveTextContent(company.companyName);
    const companyCeo = screen.getByText('CEO:').nextSibling.nextSibling;
    expect(companyCeo).toHaveTextContent(company.ceo);
    const companyWebsite = screen.getByText('Website:').nextSibling.nextSibling;
    expect(companyWebsite).toHaveAttribute('href', company.website);
    expect(companyWebsite).toHaveTextContent(company.website);
  });

  it('should have nodes for company symbol, sector and industry', () => {
    const companySymbol = screen.getByText('Symbol:').nextSibling.nextSibling;
    expect(companySymbol).toHaveTextContent(company.symbol);
    const companySector = screen.getByText('Sector:').nextSibling.nextSibling;
    expect(companySector).toHaveTextContent(company.sector);
    const companyIndustry = screen.getByText('Industry:').nextSibling.nextSibling;
    expect(companyIndustry).toHaveTextContent(company.industry);
  });

  it('should convert large values of company full-time employees, market cap and volume average to locale string ', () => {
    const companyEmployees = screen.getByText('Fulltime Employees:').nextSibling.nextSibling;
    expect(companyEmployees).not.toHaveTextContent(company.fullTimeEmployees);
    expect(companyEmployees).toHaveTextContent('1,000');
    const companyMarketCap = screen.getByText('Market Cap:').nextSibling.nextSibling;
    expect(companyMarketCap).not.toHaveTextContent(company.mktCap);
    expect(companyMarketCap).toHaveTextContent('5,000');
    const companyVolumeAvg = screen.getByText('Volume Average:').nextSibling.nextSibling;
    expect(companyVolumeAvg).not.toHaveTextContent(company.volAvg);
    expect(companyVolumeAvg).toHaveTextContent('1,255');
  });

  it('should have nodes for company IPO date, price, DCF, changes and description', () => {
    const companyIpoDate = screen.getByText('IPO Date:').nextSibling.nextSibling;
    expect(companyIpoDate).toHaveTextContent(company.ipoDate);
    const companyPrice = screen.getByText('Price:').nextSibling.nextSibling;
    expect(companyPrice).toHaveTextContent(company.price);
    const companyDcf = screen.getByText('Discounted Cash Flow:').nextSibling.nextSibling;
    expect(companyDcf).toHaveTextContent(company.dcf);
    const companyDescription = screen.getByText('Description:').nextSibling.nextSibling;
    expect(companyDescription).toHaveTextContent(company.description);
  });
});
