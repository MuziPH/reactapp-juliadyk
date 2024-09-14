import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <h1>Welcome to my react app</h1>
      <Router>
        <div>
          <nav>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
