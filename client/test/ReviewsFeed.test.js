import React from 'react';
import { shallow } from 'enzyme';

import ReviewsFeed from '../src/components/ReviewsFeed.jsx';
import testReviews from '../../exampleData.js';

describe('ReviewsFeed component renders reviews as expected', () => {
    const wrapper = shallow(<ReviewsFeed reviews={testReviews} />)
    it('should render all reviews passed in as props', () => {
        expect(wrapper.children()).toHaveLength(testReviews.length);
    });
});