import './App.css';
import Home from './components/Home';
import Likes from './components/Likes';
import Works from './components/Works';
import Career from './components/Career';
import Contact from './components/Contact';
import Hamburger from './components/Hamburger';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import './DarkMode.css';

function App() {
  return (
    <>
      <Analytics />
      <Router>
        {/* メニューとテーマ切り替えは全ページ共通。ページを移っても作り直さないので、そのまま動かずに残る */}
        <Hamburger />
        <div className="contaier">
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/likes" element={<Likes />} />
              <Route path="/works" element={<Works />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div >
        </div >
      </Router >
    </>
  );
}

export default App;
