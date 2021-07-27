import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import About from '../../components/About';

describe('Snapshot of the About component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the About component', () => {
  beforeEach(() => render(<About />));

  it('should provide some information to users of the Stock Market app', () => {
    const info = document.querySelector('.mb-3');
    const services = 'up-to-date news and stock prices';
    const exchangeOne = 'NYSE';
    const exchangeTwo = 'NASDAQ';
    expect(info.textContent).toContain(services);
    expect(info.textContent).toContain(exchangeOne);
    expect(info.textContent).toContain(exchangeTwo);
  });

  it('should provide attribution to Financial Modeling Prep', () => {
    const dataApi = 'https://financialmodelingprep.com/developer/docs/';
    const [attribution] = screen.getAllByRole('link').filter((a) => a.textContent === 'Financial Modeling Prep');
    expect(attribution).toHaveAttribute('href', dataApi);
  });

  it('should provide details of and media links to developer of the Stock Market app', () => {
    const name = screen.getByText('Sole Developer').nextSibling.nextSibling;
    expect(name.textContent).toMatch('Ubong George');

    const linkedIn = 'https://www.linkedin.com/in/ubong-itok';
    const [connect] = screen.getAllByRole('link').filter((a) => a.textContent === 'Connect with Ubong George');
    expect(connect).toHaveAttribute('href', linkedIn);

    const github = 'https://github.com/george-swift';
    const [link] = screen.getAllByRole('link').filter((a) => a.textContent === 'View other projects');
    expect(link).toHaveAttribute('href', github);
  });
});
