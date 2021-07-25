import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, screen, within } from '@testing-library/react';
import Story from '../../components/Story';

const symbol = 'SQ';
const title = 'News';
const text = 'Stub text';
const site = 'Test reporters';

describe('Snapshot of the Story component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Story symbol={symbol} title={title} text={text} site={site} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the Story component', () => {
  beforeEach(() => render(
    <Story symbol={symbol} title={title} text={text} site={site} />,
  ));

  it('should render given news in a card', () => {
    const newsCard = document.querySelector('.card');
    expect(newsCard).toBeInTheDocument();
    expect(newsCard).not.toBeEmptyDOMElement();
  });

  it('should provide details for each news report', () => {
    const companySymbol = screen.getByText(symbol);
    expect(companySymbol).toBeInTheDocument();
    const report = document.querySelector('blockquote');
    const title = within(report).getByText('News');
    expect(title).toBeInTheDocument();
    const text = within(report).getByText('Stub text');
    expect(text).toBeInTheDocument();
    const source = within(report).getByText(site);
    expect(source).toBeInTheDocument();
  });
});
