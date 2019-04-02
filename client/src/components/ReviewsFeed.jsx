import React from 'react';
import moment from 'moment';

const ReviewsFeed = ({ reviews }) => {
    return (
        <ul className="container-feed no-bullet">
            {reviews.map((review) => {
                return (
                    <li key={review.id} >
                        <img src={review.thumbnail_url} className="review-user-photo" /><span className="review-name"> {review.name}</span><br />
                        <span className="review-title">{review.title}</span><br/>
                        <span>Stars: {review.rating} </span>
                        <span className="review-date"> {moment(review.created_at).format('MMMM D, YYYY')}</span><br />
                        <span className="review-body">{review.text_body}</span><br />
                        <span className="review-store">Reviewed on {review.store_name}</span>
                        <hr />
                    </li>
                )
            })}
        </ul>
    )
};

export default ReviewsFeed;