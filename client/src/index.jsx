import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ReviewsSummary from './components/ReviewsSummary.jsx';
import TopReviews from './components/TopReviews.jsx';
import ReviewsFeed from './components/ReviewsFeed.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productID: 21,
            productReviews: [],
        };

    };

    getPositiveReviews(reviews) {
        return reviews.filter(review => review.rating > 3)
    };

    getCriticalReviews(reviews) {
        return reviews.filter(review => review.rating < 3)
    };

    getReviews() {
        axios.get(`/reviews/${this.state.productID}`)
        .then((response) => {
            this.setState({ productReviews: response.data })
        })
        .catch((err) => console.log(err))
    };

    componentDidMount() {
        this.getReviews();
    };

    render() {
        const positiveReviews = this.getPositiveReviews(this.state.productReviews);
        const criticalReviews = this.getCriticalReviews(this.state.productReviews);

        console.log(this.state.productReviews)
        return (
            <div>
                < ReviewsSummary reviews={this.state.productReviews} />
                < TopReviews positiveReviews={positiveReviews} criticalReviews={criticalReviews} />
                < ReviewsFeed reviews={this.state.productReviews} />
            </div>
        )
    };
};

ReactDOM.render(<App />, document.querySelector('#app'));
