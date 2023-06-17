import './App.css';
import { Routes, Route } from "react-router-dom";
import Card from './pages/Card';
import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';
import Card2 from './pages/Card2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Searchpage />} />
      </Routes>
    </div>
  );
}

export default App;
