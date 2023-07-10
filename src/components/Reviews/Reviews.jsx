import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            params: {api_key: 'eda34bd8773f8b183adc5281f556f30c',
            },
          }
        );
        setReviews(response.data.results);
      } catch (error) {
        alert("err-reviews");
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
        {reviews.length === 0 ? (
            <div>We don't have any reviews for this movie.</div>
        ) : (
            <div>
                <h2>Reviews</h2>
                <ul>
                    {reviews.map((review) => (
                    <li key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
};

export default Reviews;
