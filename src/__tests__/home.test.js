import React from 'react';
import Enzyme, { mount }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Home from '../views/home';

describe('Home', () => {
		it('renders without crashing', () => {
				mount(<Home />);
		});
});
