import logo from './logo.svg';
import './App.css';
import TechPortfolioBackground from './components/landingpage';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/aboutme';
import MySkills from './components/skills';
import MyProject from './components/myProject';
import Footer from './components/footer';
import Experience from './components/experience';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <TechPortfolioBackground/>
      <Footer/>
    </div>
  );
}

export default App;
