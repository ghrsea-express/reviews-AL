import React from 'react';
import moment from 'moment';

const TopReviews = ({positiveReviews, criticalReviews}) => {
    return (
        <div className="container-top-reviews">
            <div className="review">
                Top Positive Review
                < TopPositiveReview review={positiveReviews[0]} /> 
            </div>
            <div>
                <span className="vs-circle">VS</span>
            </div>
            <div className="review">
                Top Critical Review
                < TopCriticalReview review={criticalReviews[0]} />
            </div>
        </div>
    )
};

const TopPositiveReview = ({review}) => {
    return (
        <div>
            <img src={review.thumbnail_url} className="review-user-photo" /><span className="review-name"> {review.name}</span><br />
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
            <img src={review.thumbnail_url} className="review-user-photo" /><span className="review-name"> {review.name}</span><br />
            <span className="review-title">{review.title}</span><br/>
            <span>Stars: {review.rating} </span>
            <span className="review-date"> {moment(review.created_at).format('MMMM D, YYYY')}</span><br />
            <span className="review-body">{review.text_body}</span><br />
            <span className="review-store">Reviewed on {review.store_name}</span>
        </div>
    )
};

export default TopReviews;