/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
