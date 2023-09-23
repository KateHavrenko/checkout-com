import { Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Results from './pages/Results';


const App = () => {
  return (
    <div className="py-20 px-10 bg-purple-300 min-h-screen">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
};

export default App;