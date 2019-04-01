const reviews = require('./reviews.json');
const moment = require('moment');

const randomNumberGenerator = (min, max) => {
    return min + Math.floor( Math.random() * (max + 1 - min) )
};

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

for (var review of reviews) {
    review.rating = randomNumberGenerator(1,5);
    review.created_at = moment(randomDate(new Date(2010,0,1), new Date())).format('YYYY-MM-DD');
    review.helpful_score = randomNumberGenerator(0,500);
    review.product_id = randomNumberGenerator(1,100);
    review.user_id = randomNumberGenerator(1,100);
};

module.exports = reviews;