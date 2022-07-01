import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRoute as Router, Switch, Route, Link } from "react-router-dom"; 

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
