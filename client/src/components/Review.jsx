import React from 'react';
import moment from 'moment';
import getStars from '../../utils/getStars.js';

const Review = ({review}) => {
    return (
        <div key={review.id} >
            <span className="review-title">{review.title}</span><br/>
            <span className="star-rating">{getStars(review.rating)}</span>
            <span className="review-date"> {moment(review.created_at).format('MMMM D, YYYY')}</span><br />
            <span className="review-body">{review.text_body}</span><br />
            <span className="review-store">Reviewed on {review.store_name}</span>
        </div>
    );
}

export default Review;