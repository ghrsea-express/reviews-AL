import React from 'react';

const ReviewsSummary = (props) => {
    return (
        <div className="container-summary">
            <hr />
            <h2 className="title-summary">Reviews Summary</h2>
            <div className="container-stats-chart">
                <div className="summary-stats">
                    <div>Summary stats</div>
                </div>
                <div className="summary-chart">
                    <div>Summary chart</div>
                </div>
            </div>
        </div>
    )
};

export default ReviewsSummary;
