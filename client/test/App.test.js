// import React from 'react';
// import { shallow } from 'enzyme';

const App = require ('../src/components/App.jsx');
const testReviews = require ('../../exampleData.js');

describe('check input data', () => {
    it('should check length of array', () => {
        expect(Array.isArray(testReviews)).toEqual(true);
        expect(testReviews.length).toEqual(13);
    });
});

describe('filter positive reviews correctly', ()=> {
    it('should filter out reviews with ratings > 3', () => {
        expect(App.getPositiveReviews(testReviews).length).toEqual(5);
    });
});

describe('filter critical reviews correctly', ()=> {
    it('should filter out reviews with ratings < 3', () => {
        expect(App.getCriticalReviews(testReviews).length).toEqual(7);
    });
});

