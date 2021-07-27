import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, within, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';

const reset = jest.fn(() => {});

describe('Snapshot of the Header component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Header reset={reset} />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the Header component', () => {
  beforeEach(() => render(
    <Router>
      <Header reset={reset} />
    </Router>,
  ));

  it('should have a link to the home page in brand name', () => {
    const brandName = document.querySelector('.navbar-brand');
    expect(brandName).toBeInTheDocument();
    fireEvent.click(brandName);
    expect(reset).toHaveBeenCalledTimes(1);
    const app = within(brandName).getByText('Stock Market');
    expect(app).toBeInTheDocument();
    expect(brandName).toHaveAttribute('href', '/');
  });

  it('should have hamburger for mobile devices', () => {
    const navBar = document.querySelector('nav');
    const hamburger = within(navBar).getByRole('button');
    expect(hamburger).toHaveClass('navbar-toggler');
  });

  it('should have links to the three main SPA pages', () => {
    const navBar = document.querySelector('.navbar-nav');

    const routes = navBar.querySelectorAll('.nav-link');
    expect(routes).toHaveLength(3);

    routes.forEach((link) => fireEvent.click(link));
    expect(reset).toHaveBeenCalledTimes(3);

    const homePage = within(navBar).getByText('Home');
    expect(homePage).toBeInTheDocument();

    const stockListPage = within(navBar).getByText('Stock List');
    expect(stockListPage).toBeInTheDocument();

    const aboutPage = within(navBar).getByText('About');
    expect(aboutPage).toBeInTheDocument();
  });
});
