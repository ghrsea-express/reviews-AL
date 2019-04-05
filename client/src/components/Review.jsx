import React from 'react';
import moment from 'moment';
import getStars from '../../utils/getStars.js';

const Review = ({review}) => {
    return (
        <li key={review.id} >
            <img src={review.thumbnail_url} className="review-user-photo" /><span className="review-name"> {review.name}</span><br />
            <span className="review-title">{review.title}</span><br/>
            <span className="star-rating">{getStars(review.rating)}</span>
            <span className="review-date"> {moment(review.created_at).format('MMMM D, YYYY')}</span><br />
            <span className="review-body">{review.text_body}</span><br />
            <span className="review-store">Reviewed on {review.store_name}</span>
            <hr />
        </li>
    );
}

export default Review;