
import './App.css';
import About from './Components/About';
import ContactForm from './Components/Email';

import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <ContactForm/>
    </div>
  );
}

export default App;
