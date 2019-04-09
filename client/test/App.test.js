import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../src/components/App.jsx';
import testReviews from '../../exampleData.js';

describe('testing App component', () => {
    it('App component should exist', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.name()).toEqual('div');
    });
});

// describe('filter positive reviews correctly', ()=> {
//     it('should filter out reviews with ratings > 3', () => {
//         expect(App.getPositiveReviews(testReviews).length).toEqual(5);
//     });
// });

// describe('filter critical reviews correctly', ()=> {
//     it('should filter out reviews with ratings < 3', () => {
//         expect(App.getCriticalReviews(testReviews).length).toEqual(7);
//     });
// });

