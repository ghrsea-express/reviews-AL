import React from 'react';
import { shallow } from 'enzyme';

import Review from '../src/components/Review.jsx';
import testReviews from '../../exampleData.js';


describe('Review component renders individual reviews as expected', () => {
    const testReview = testReviews[0];
    const wrapper = shallow(<Review review={testReview}/>);
    it('Should have title with "review-title" class', () => { 
        expect(wrapper.childAt(0).text()).toEqual(testReview.title);
        expect(wrapper.childAt(0).hasClass('review-title')).toEqual(true);
    });
    it('Should show correct number of stars with "star-rating" class', () => { 
        expect(wrapper.childAt(2).text()).toEqual('★★★★☆');
        expect(wrapper.childAt(2).hasClass('star-rating')).toEqual(true);
    });
    it('Should have date in "Month Day, Year" format with "review-date" class', () => { 
        expect(wrapper.childAt(3).text()).toEqual(' October 4, 2017');
        expect(wrapper.childAt(3).hasClass('review-date')).toEqual(true);
    });
    it('Should have a text body with "review-body" class', () => { 
        expect(wrapper.childAt(5).text()).toEqual(testReview.text_body);
        expect(wrapper.childAt(5).hasClass('review-body')).toEqual(true);
    });
    it('Should have reference to store name with "review-store" class', () => { 
        expect(wrapper.childAt(7).text()).toEqual(`Reviewed on ${testReview.store_name}`);
        expect(wrapper.childAt(7).hasClass('review-store')).toEqual(true);
    });
}); 