import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../src/components/App.jsx';
import testReviews from '../../exampleData.js';

describe('testing App component', () => {
    const wrapper = shallow(<App />);
    it('should exist', () => {
        expect(wrapper.name()).toEqual('div');
    });

    it('should filter out reviews with ratings > 3', () => {
        expect(wrapper.instance().getPositiveReviews(testReviews).length).toEqual(5);
    });

    it('should filter out reviews with ratings < 3', () => {
        expect(wrapper.instance().getCriticalReviews(testReviews).length).toEqual(7);
    });

});


