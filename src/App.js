import './App.css';
import TechPortfolioBackground from './components/landingpage';
import Footer from './components/footer';
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
