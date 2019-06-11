import React from 'react';
import ReviewsNav from './ReviewsNav.jsx';
import ReviewsMain from './ReviewsMain.jsx';
import style from './css/app.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }


  fetchReviews() {
    let id = window.location.href.split("id=")[1];
   
    axios.get(`http://localhost:3004/reviews_mongo/${id}`)
      .then(({ data }) => {
        this.setState({
          reviews: data[0].reviews
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={style.container}>
        <ReviewsNav className={style.reviewsNav} reviews={this.state.reviews} />
        <ReviewsMain reviews={this.state.reviews} />
      </div>
      )
  }
}

export default App;