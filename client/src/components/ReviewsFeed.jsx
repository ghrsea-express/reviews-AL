import React from 'react';
import Review from './Review.jsx';

const ReviewsFeed = ({ reviews }) => {
    return (
        <ul className="container-feed no-bullet">
            {reviews.map((review) => {
                return <Review review={review} key={review.id}/>
                })
            }
        </ul>
    );
}

export default ReviewsFeed;