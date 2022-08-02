import './App.css';

import Header from './Header/Header';
import Home from './Home/Home';
import JobCount from './Jobcount/JobCount';
import Categories from './Categories/Categories';
import Features from './Features/Features';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <JobCount />
      <Categories />
      <Features />
      <Contact />
    </div>
  );
}

export default App;
