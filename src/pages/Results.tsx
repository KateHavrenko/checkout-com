import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';
import LineChart from '../components/LineChart';

export default function Results() {
  const feedbacks = useSelector((state: RootState) => state.feedback);

  const newestFeedback = feedbacks.length > 10 ? feedbacks.slice(feedbacks.length - 10) : feedbacks;

  const chartData = {
    labels: feedbacks?.map((feedback) => feedback.data.timestamp.split(' ').slice(1)),
    datasets: [{
      label: 'Rating',
      data: feedbacks?.map((feedback) => +feedback.data.rating)
    }]
  }
  return (
    <div>
      <div className='md:flex md:justify-between'>
        <h1 className='text-xl mb-4 md:mb-12 font-bold'>Feedback Results</h1>

        <Link to="/">
          <button className='block bg-yellow-500 text-yellow-800 rounded shadow py-1 px-3 text-lg overflow-hidden md:mb-0 mb-4'>
            Go back
          </button>
        </Link> 

      </div>
      {feedbacks ? <LineChart chartData={chartData}/> : '<p>Add a feedback</p>'}
      <ul>
        <p className='font-bold my-6'>Latest comments</p>
        {newestFeedback && newestFeedback.slice().reverse().map((feedback) => (
          <li key={feedback.id} className='py-2'>
            <p>{feedback.data.firstName}</p>
            <p>{feedback.data.email}</p>
            <p className='py-2'>{feedback.data.comment}</p>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}