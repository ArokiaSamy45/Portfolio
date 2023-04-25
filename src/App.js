
import './App.css';
import {HamburgerMenu} from './components/NavBar'; 
import {Home} from './components/home';
import { AboutMe } from './components/about';
import { Project } from './components/projects';
import { Footer } from './components/footer';
import Contact from './components/contact';





function App() {
  
  return (
    <div className="App">

     <HamburgerMenu/>
     <Home/>
     <AboutMe/>
     <Project/>
     <Contact/>
     <Footer/>

    </div>
  
  );
}

export default App;




