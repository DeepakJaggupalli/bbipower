import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './components/Businesses';
import Project from './pages/Project';
import Clearances from './pages/Clearances';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Home />
        <About />
        <Businesses />
        <Project />
        <Clearances />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
