const getStars = require('../utils/getStars.js')

describe('helper function to get star rating', () => {
    it('should have length of 5 by default', () => {
        expect(getStars(0).length).toEqual(5);
        expect(getStars(2).length).toEqual(5);
    });
    it('should return correct number of solid stars', () => {
        expect(getStars(1)).toEqual('★☆☆☆☆');
        expect(getStars(2)).toEqual('★★☆☆☆');
        expect(getStars(5)).toEqual('★★★★★');
    });
});
