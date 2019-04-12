import React, { Component } from 'react';
import axios from 'axios';

import ReviewsSummary from './ReviewsSummary.jsx';
import TopReviews from './TopReviews.jsx';
import ReviewsFeed from './ReviewsFeed.jsx';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: (window.location.pathname).match(/\d+/),
      productReviews: [],
      reviewsToRender: []
    };
    this.updateReviews = this.updateReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getPositiveReviews(reviews) {
    return reviews.filter(review => review.rating > 3);
  }

  getCriticalReviews(reviews) {
    return reviews.filter(review => review.rating < 3);
  }

  getReviews() {
    axios.get(`/reviews/${this.state.productID}`)
      .then((response) => {
        this.setState({ 
          productReviews: response.data,
          reviewsToRender: response.data.slice(0,3) 
        });
      })
      .catch(err => console.log(err));
  }

  updateReviews(reviews) {
    this.setState({
      reviewsToRender: reviews
    });
  }

  render() {
    const { productReviews, reviewsToRender } = this.state;
    const positiveReviews = this.getPositiveReviews(productReviews);
    const criticalReviews = this.getCriticalReviews(productReviews);
    return (
      <div className="review-module-body">
        <ReviewsSummary reviews={productReviews} updateReviews={this.updateReviews} />
        <TopReviews positiveReviews={positiveReviews} criticalReviews={criticalReviews} updateReviews={this.updateReviews} />
        <ReviewsFeed reviews={reviewsToRender} />
      </div>
    );
  }
}

export default App;
