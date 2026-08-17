import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Clearances from './pages/Clearances';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Home />
        <About />
        <Project />
        <Clearances />
        <Contact />
      </main>
    </Router>
  );
}

export default App;
