import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store'; // Import your RootState type
import { Link } from 'react-router-dom';

export default function Todos() {
  const feedbacks = useSelector((state: RootState) => state.feedback);

  console.log(feedbacks)

  return (
    <div>
      <h1>Feedback Results</h1>
      <Link to="/">Go back</Link>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <p>{feedback.data.email}</p>
            <p>{feedback.data.firstName}</p>
            <p>{feedback.data.comment}</p>
          </li>

        ))}
      </ul>
    </div>
  );
}