import React, { Component } from 'react';
import axios from 'axios';

import ReviewsSummary from './ReviewsSummary.jsx';
import TopReviews from './TopReviews.jsx';
import ReviewsFeed from './ReviewsFeed.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 21,
      productReviews: [],
    };
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
        this.setState({ productReviews: response.data });
      })
      .catch(err => console.log(err));
  }


  render() {
    const positiveReviews = this.getPositiveReviews(this.state.productReviews);
    const criticalReviews = this.getCriticalReviews(this.state.productReviews);
    return (
      <div>
        <ReviewsSummary reviews={this.state.productReviews} />
        <TopReviews positiveReviews={positiveReviews} criticalReviews={criticalReviews} />
        <ReviewsFeed reviews={this.state.productReviews} />
      </div>
    );
  }
}

export default App;
