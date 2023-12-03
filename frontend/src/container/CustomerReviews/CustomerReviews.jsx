// Existing code...
import React, { useState, useEffect } from 'react';
import './CustomerReviews.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.json())
      .then((data) => {
        const restaurant = data[0]?.restaurant.reviews;

        if (restaurant) {
          setReviews(restaurant);
        } else {
          setError("No restaurant data found");
        }
      })
      .catch((error) => {
        setError(`Error fetching data: ${error.message}`);
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to generate a random avatar image URL
  const getRandomAvatar = (seed) => `https://robohash.org/${seed}.png`;

  return (
    <div className="container">
      <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h4 className="font-cond-l fg-accent lts-md mgb-10">Not Yet Convinced?</h4>
        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg">Read Customer Reviews</h1>
      </div>
      <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        {reviews.map((review, index) => (
          <li key={index}>
            {/* Random Avatar Image */}
            <img src={getRandomAvatar(review.customer_name)} className="wpx-100 img-round mgb-20" alt={`Avatar${index + 1}`} />
            {/* Review data */}
            <p className="fs-110 font-cond-l">"{review.comment}"</p>
            <h5 className="font-cond mgb-5 fg-text-d fs-130">{review.customer_name}</h5>
            {/* Additional review information */}
            <small className="font-cond case-u lts-sm fs-80 fg-text-l">Rating: {review.rating}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerReviews;
