import React from 'react';
import { shallow } from 'enzyme';

import TopReviews from '../src/components/TopReviews';
import testReviews from '../../exampleData.js';

describe('should render one positive and one negative review', () => {
    const wrapper = shallow(<TopReviews positiveReviews={testReviews} criticalReviews={testReviews} />);
    it('should not render any review if an empty array is supplied', () => {
        const wrapper = shallow(<TopReviews positiveReviews={[]} criticalReviews={[]} />);
        expect(wrapper.find('.review').children()).toHaveLength(4)
    });
});
