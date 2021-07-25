import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import FlashMessage from '../../components/FlashMessage';

describe('Snapshot of the FlashMessage component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <FlashMessage>
        Something went wrong! Try again.
      </FlashMessage>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
