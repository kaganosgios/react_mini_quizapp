import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduce from './pages/introduce/introduce.jsx';
import Quiz from './pages/quiz/quiz.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
