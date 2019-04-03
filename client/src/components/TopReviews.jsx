import React from 'react';
import moment from 'moment';

const TopReviews = ({positiveReviews, criticalReviews}) => {
    return (
        <div className="container-top-reviews">
            <div className="review">
                <span className="top-review">Top Positive Review</span>
                < TopPositiveReview review={positiveReviews[0]} /> 
            </div>
            <div className="container-vs">
                <div className="vs-circle">VS</div>
            </div>
            <div className="review">
                <span className="top-review">Top Critical Review</span>
                < TopCriticalReview review={criticalReviews[0]} />
            </div>
        </div>
    )
};

const TopPositiveReview = ({review}) => {
    return (
        <div>
            {/* <img src={review.thumbnail_url} className="review-user-photo" /><span className="review-name"> {review.name}</span><br /> */}
            <span className="review-title">{review.title}</span><br/>
            <span>Stars: {review.rating} </span>
            <span className="review-date"> {moment(review.created_at).format('MMMM D, YYYY')}</span><br />
            <span className="review-body">{review.text_body}</span><br />
            <span className="review-store">Reviewed on {review.store_name}</span>
        </div>
    )
};

const TopCriticalReview = ({review}) => {
    return (
        <div>
            {/* <img src={review.thumbnail_url} className="review-user-photo" /><span className="review-name"> {review.name}</span><br /> */}
            <span className="review-title">{review.title}</span><br/>
            <span>Stars: {review.rating} </span>
            <span className="review-date"> {moment(review.created_at).format('MMMM D, YYYY')}</span><br />
            <span className="review-body">{review.text_body}</span><br />
            <span className="review-store">Reviewed on {review.store_name}</span>
        </div>
    )
};

export default TopReviews;