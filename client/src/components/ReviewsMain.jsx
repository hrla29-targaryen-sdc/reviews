import React from 'react';
import ReviewSort from './ReviewSort.jsx';
import style from './css/ReviewMain.css'

class ReviewsMain extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className={style.reviewsContainer}>
        <ReviewSort reviews={this.props.reviews} />
      </div>
      )
  }
}

export default ReviewsMain;