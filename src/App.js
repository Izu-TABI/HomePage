import './App.css';
import Home from './components/Home';
import Likes from './components/Likes';
import Works from './components/Works';
import Activities from './components/Activities';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>   
      <Router>
        <div className="contaier">
          <div className="main">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/likes" element={<Likes />}/>
                <Route path="/works" element={<Works />}/>
                <Route path="/activities" element={<Activities />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
