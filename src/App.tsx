import { Routes, Route } from 'react-router-dom';
import Results from './pages/Results';
import FeedbackForm from './pages/FeedbackForm';

const App = () => {
  return (
    <div className="py-20 px-10 bg-purple-300 min-h-screen">
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
};

export default App;