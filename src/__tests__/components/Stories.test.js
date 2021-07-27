import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Stories from '../../containers/Stories';

describe('Snapshot of the Stories component', () => {
  it('should render correctly while fetching data', () => {
    const tree = renderer.create(<Stories />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the Stories component', () => {
  it('should load the spinner when the component mounts', () => {
    const wrapper = shallow(<Stories />);
    expect(wrapper.find('FlashMessage').exists()).toBe(false);
    expect(wrapper.find('FaSpinner').exists()).toBe(true);
  });
});
