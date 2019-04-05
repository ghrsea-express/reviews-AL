import React from 'react';
import Review from './Review.jsx';

const ReviewsFeed = ({ reviews }) => {
    return (
        <div className="feed">
            {reviews.map((review) => {
                return (
                    <div key={review.id}>
                        <img src={review.thumbnail_url} className="review-user-photo" /><span className="review-name"> {review.name}</span>
                        <Review review={review} key={review.id}/>
                        <hr className="horizontal-line" />
                    </div>
                    )
                })
            }
        </div>
    );
}

export default ReviewsFeed;