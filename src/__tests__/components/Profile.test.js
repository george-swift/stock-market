import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '../../containers/Profile';

describe('Snapshot of the Profile component', () => {
  it('should render correctly while fetching data', () => {
    const tree = renderer
      .create(
        <Router>
          <Profile />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
