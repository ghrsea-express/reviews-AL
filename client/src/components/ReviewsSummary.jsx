import React from 'react';
import getStars from '../../utils/getStars.js';

const ReviewsSummary = ({ reviews }) => {
    const ratings = [5,4,3,2,1];
    let averageRating = 0;
    if (reviews.length) {
        averageRating = getAverageRating(reviews)
    }
    return (
        <div className="container-summary">
            <hr />
            <h2 className="title-summary">Reviews Summary</h2>
            <div className="container-stats-chart">
                <div className="summary-stats">
                    <div className="average-rating">{averageRating}</div> 
                    <span className="star-rating">{getStars(Math.round(averageRating))}</span> 
                    <div><a className="all-reviews" href="#">{`${reviews.length} reviews`}</a></div>
                </div>
                <div className="container-summary-chart">
                    <div className="ratings-chart">
                        {ratings.map((rating) => {
                            return (
                                <div className="container-bar">
                                    <span>{rating}  </span>
                                    <span className="bar">bar</span>
                                    <span className="bar-percentage">  {getPercentage(reviews,rating)}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

const getAverageRating = (reviews) => {
    let sumOfRatings = 0;
    sumOfRatings = reviews.reduce((sum, review) => {
        return sum + review.rating;
    }, 0)
    return Number( (sumOfRatings / reviews.length).toFixed(1) );
};

const getPercentage = (reviews, rating) => {
    let filtered = reviews.filter((review) => { return review.rating === rating})
    return Math.round(filtered.length / reviews.length * 100) + '%'
};

export default ReviewsSummary;
