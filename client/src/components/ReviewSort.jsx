import React from 'react';
import axios from 'axios';
import ReviewsPagination from './ReviewsPagination.jsx';
import style from './css/ReviewSort.css';

class ReviewSort extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      showMenu: false,
      dropdownL: ['All stars', '1 star', '2 star', '3 star', '4 star', '5 star'],
      dropdownR: ['Sort Reviews', 'Star Rating', 'Submission Time'],
      currentSelectionL: 'Star Rating',
      currentSelectionR: 'Sort Reviews',
      allReviews: [],
      sortedReviews: [],
    };
    this.showMenuL = this.showMenuL.bind(this);
    this.handleChangeL = this.handleChangeL.bind(this);
    this.showMenuR = this.showMenuR.bind(this);
    this.closeMenuL = this.closeMenuL.bind(this);
    this.closeMenuR = this.closeMenuR.bind(this);
    this.handleChangeR = this.handleChangeR.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
    this.starFilter = this.starFilter.bind(this);
    this.rightSort = this.rightSort.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.fetchReviews();
    }
  }  

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  fetchReviews() {
    let id = window.location.href.split("id=")[1];
   
    axios.get(`http://localhost:3004/reviews_mongo/${id}`)
      .then(({ data }) => {
        this.setState({
          allReviews: data[0].reviews,
          sortedReviews: data[0].reviews
        })
      })
      .catch(err => console.log(err))
  }

  showMenuL(event) {
    event.preventDefault();
    this.setState({
      currentSelectionL: 'Star Rating',
      showMenuL: true
    }, () => {
      document.addEventListener('click', this.closeMenuL);
    });
  }
  
  closeMenuL(event) {
    if (!this.dropdownLMenu.contains(event.target)) {
      this.setState({ showMenuL: false }, () => {
        document.removeEventListener('click', this.closeMenuL);
      });
    }
  }

  closeMenuR(event) {
    if (!this.dropdownRMenu.contains(event.target)) {
      this.setState({ showMenuR: false }, () => {
        document.removeEventListener('click', this.closeMenuR);
      });
    }
  }

  handleChangeL(event) {
    let txt = event.target.textContent
    this.setState({
      sortedReviews: this.state.allReviews
    }, () => {
      if (txt !== 'All stars') {
        this.starFilter(Number(txt[0]))
      }
    })

    this.setState({
      currentSelectionL: event.target.textContent
    }, () => {
      this.setState({ showMenuL: false }, () => {
        document.removeEventListener('click', this.closeMenuL);
      }); 
    })
  }

  showMenuR(event) {
    event.preventDefault();
    this.setState({
      currentSelectionR: 'Sort Reviews',
      showMenuR: true
    }, () => {
      document.addEventListener('click', this.closeMenuR);
    });
  }
  

  handleChangeR(event) {
    this.rightSort(event.target.textContent);

    this.setState({
      currentSelectionR: event.target.textContent
    }, () => {
      this.setState({ showMenuR: false }, () => {
        document.removeEventListener('click', this.closeMenuR);
      }); 
    })
  }

  rightSort(param) {

    const quicksortDate = function(array) {

      let concat = function () {
        return [].concat.apply([], arguments);
      };

      if (array.length <= 1) { return array; }

      let pivot = array[0]['createdAt'];
      let pivot1 = array[0];

      let left = array.slice(1).filter(function (x) {
        return x['createdAt'] < pivot;
      });

      let right = array.slice(1).filter(function (x) {
        return x['createdAt'] >= pivot;
      });

      return concat(quicksortDate(left), [pivot1], quicksortDate(right));
    };

    const quicksortStar = function(array) {

      let concat = function () {
        return [].concat.apply([], arguments);
      };

      if (array.length <= 1) { return array; }

      let pivot = array[0]['rating'];
      let pivot1 = array[0];

      let left = array.slice(1).filter(function (x) {
        return x['rating'] < pivot;
      });

      let right = array.slice(1).filter(function (x) {
        return x['rating'] >= pivot;
      });

      return concat(quicksortStar(left), [pivot1], quicksortStar(right));
    };

    let copy = this.state.sortedReviews.slice();
    if (param === 'Star Rating') {
      this.setState({
        sortedReviews: quicksortStar(copy).reverse()
      })
    } else if (param === 'Submission Time') {
      this.setState({
        sortedReviews: quicksortDate(copy).reverse()
      })
    }
  }

  starFilter(num) {
    let array = [];
    let copy = this.state.sortedReviews.slice();
    copy.forEach(review => {
      if (review.rating === num) {
        array.push(review)
      }
    })
    console.log(array)
    this.setState({
      sortedReviews: array
    })
  }

  render() {

    let { currentPage, todosPerPage, sortedReviews } = this.state;

    // Logic for displaying current todos
    let indexOfLastTodo = currentPage * todosPerPage;
    let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let currentTodos = sortedReviews.slice(indexOfFirstTodo, indexOfLastTodo);

    let renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo.title}</li>;
    });

    // Logic for displaying page numbers
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedReviews.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    let renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <div className={style.reviewsSortContainer}>
          <div className={style.reviewsStarSort}>
            <div className={style.LeftSortHeader}>
            <button className={style.LeftSortHeader1} onClick={this.showMenuL}>
              {this.state.currentSelectionL}
            </button><img className={style.CarotHeader} src="https://png.pngtree.com/svg/20170515/72e732539c.svg" />
            </div>
            {
              this.state.showMenuL
                ? (
                  <div
                    className={style.menu} ref={(element) => {
                      this.dropdownLMenu = element;
                    }}
                  >
                    <button className={style.LeftSort} onClick={(e) => this.handleChangeL(e)}>All stars</button>
                    <button className={style.LeftSort} onClick={(e) => this.handleChangeL(e)}>1 star</button>
                    <button className={style.LeftSort} onClick={(e) => this.handleChangeL(e)}>2 star</button>
                    <button className={style.LeftSort} onClick={(e) => this.handleChangeL(e)}>3 star</button>
                    <button className={style.LeftSort} onClick={(e) => this.handleChangeL(e)}>4 star</button>
                    <button className={style.LeftSort} onClick={(e) => this.handleChangeL(e)}>5 star</button>
                  </div>
                )
                : (
                  null
                )
            }
          </div>
          <div className={style.reviewsReviewSort}>
            <div>
            <div className={style.dateSortHeader}>
              <button className={style.dateSortHeader1} onClick={this.showMenuR}>
                {this.state.currentSelectionR}
              </button><img className={style.CarotHeader} src="https://png.pngtree.com/svg/20170515/72e732539c.svg" />
            </div>
              
              {
                this.state.showMenuR
                  ? (
                    <div
                      className={style.menu} ref={(element) => {
                        this.dropdownRMenu = element;
                      }}
                    >
                      <button className={style.dateSort} onClick={(e) => this.handleChangeR(e)}>Star Rating</button>
                      <button className={style.dateSort} onClick={(e) => this.handleChangeR(e)}>Submission Time</button>
                    </div>
                  )
                  : (
                    null
                  )
              }
            </div>
          </div>
        </div>

        <ReviewsPagination  sortedReviews={this.state.sortedReviews} />

      </div>
    );
  }
}

export default ReviewSort;