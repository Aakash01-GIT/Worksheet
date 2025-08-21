import { BrowserRouter } from 'react-router-dom';
import { 
  Header, 
  Hero, 
  About, 
  Experience, 
  Projects, 
  Skills, 
  Contact, 
  Footer 
} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Header />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

