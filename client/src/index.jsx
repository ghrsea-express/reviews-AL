import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import ReviewsSummary from './components/ReviewsSummary.jsx';
import TopReviews from './components/TopReviews.jsx';
import ReviewsFeed from './components/ReviewsFeed.jsx';

import exampleData from '../../exampleData.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productID: 39,
            productReviews: [],
            positiveReviews: exampleData,
            criticalReviews: exampleData
        };

    };

    getPositiveReviews() {
        const reviews = this.state.productReviews;
        const positiveReviews = reviews.filter((review) => {
            return review.rating > 3;
        })
        return positiveReviews;
    };

    getCriticalReviews() {
        const reviews = this.state.productReviews;
        const criticalReviews = reviews.filter((review) => {
            return review.rating < 3;
        })
        return criticalReviews;
    };

    getReviews() {
        Axios.get(`/reviews/${this.state.productID}`)
        .then((response) => {
            this.setState({ productReviews: response.data })
            return this.getPositiveReviews()
        })
        .then((reviews) => { 
            this.setState({ positiveReviews: reviews }) 
            return this.getCriticalReviews()
        })
        .then((reviews) => { 
            this.setState({ criticalReviews: reviews })
        })
        .catch((err) => console.log(err))
    };

    componentDidMount() {
        this.getReviews();
    };

    render() {
        return (
            <div>
                < ReviewsSummary reviews={this.state.productReviews} />
                < TopReviews positiveReviews={this.state.positiveReviews} criticalReviews={this.state.criticalReviews} />
                < ReviewsFeed reviews={this.state.productReviews} />
            </div>
        )
    };
};

ReactDOM.render(<App />, document.querySelector('#app'));
