import React from 'react';
import getStars from '../../utils/getStars.js';

const ReviewsSummary = ({ reviews }) => {
    return (
        <div className="container-summary">
            <hr />
            <h2 className="title-summary">Reviews Summary</h2>
            <div className="container-stats-chart">
                <SummaryStats reviews={reviews} />
                <SummaryChart reviews={reviews} />
            </div>
        </div>
    );
}

const SummaryStats = ({reviews}) =>  {
    let averageRating = 0;
    if (reviews.length) {
        averageRating = getAverageRating(reviews)
    }
    return (
        <div className="summary-stats">
            <div className="average-rating">{averageRating}</div> 
            <span className="star-rating">{getStars(Math.round(averageRating))}</span> 
            <div><a className="all-reviews" href="#">{`${reviews.length} reviews`}</a></div>
        </div>
    );
}

const SummaryChart = ({reviews}) => {
    const ratings = [5,4,3,2,1];
    return (
        <div className="ratings-chart">
            {ratings.map((rating) => {
                return (
                    <div className="container-bar" key={rating}>
                        <span>{rating}</span>
                        <span className="bar">
                            <svg width='150px' height='14px'>
                                <g className='bar'>
                                    <rect fill='rgb(235, 235, 235)' width='100%' height='100%' rx='8' ry='8'></rect>;
                                    <rect fill='rgb(255, 208, 0)' width={getPercentage(reviews,rating)} height='100%' rx='8' ry='8'></rect>
                                </g>
                            </svg>
                        </span>
                        <span className="bar-percentage">{getPercentage(reviews,rating)}</span>
                    </div>
                )
            })}
        </div>
    )
}

const getAverageRating = (reviews) => {
    let sumOfRatings = 0;
    sumOfRatings = reviews.reduce((sum, review) => {
        return sum + review.rating;
    }, 0)
    return Number( (sumOfRatings / reviews.length).toFixed(1) );
}

const getPercentage = (reviews, rating) => {
    let filtered = reviews.filter((review) => { return review.rating === rating})
    return Math.round(filtered.length / reviews.length * 100) + '%'
}

export default ReviewsSummary;
