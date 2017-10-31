import React from 'react';
import Enzyme, { mount }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import AppWrapper from '../AppWrapper';

describe('AppWrapper', () => {
		it('renders without crashing', () => {
				mount(<AppWrapper />);
		});
});
