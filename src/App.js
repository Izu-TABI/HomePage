import './App.css';
import Home from './components/Home';
import Likes from './components/Likes';
import Works from './components/Works';
import Activities from './components/Activities';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import { Suspense } from 'react';

function App() {

  return (
    <div>
      <Router>
        <Suspense fallback={<Loading />}>
          <div className="contaier">
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/likes" element={<Likes />} />
                <Route path="/works" element={<Works />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </Suspense>

      </Router>
    </div>
  );
}

export default App;
