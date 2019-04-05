import React from 'react';
import Review from './Review.jsx';

const TopReviews = ({positiveReviews, criticalReviews, updateReviews}) => {
    return (
        <div className="container-top-reviews">
            <div className="review">
                <span className="top-review">Top Positive Review</span>
                { positiveReviews.length && <Review review={positiveReviews[0]} />}
                <span className="all-reviews" onClick={(e) => {updateReviews(positiveReviews)}}>{`See all ${positiveReviews.length} positive reviews`}</span> 
            </div>

            <div className="container-vs">
                <div className="vs-circle">VS</div>
            </div>

            <div className="review">
                <span className="top-review">Top Critical Review</span>
                {criticalReviews.length && <Review review={criticalReviews[0]} />}
                <span className="all-reviews" onClick={(e) => {updateReviews(criticalReviews)}}>{`See all ${criticalReviews.length} critical reviews`}</span>
            </div>
        </div>
    )
};

export default TopReviews;