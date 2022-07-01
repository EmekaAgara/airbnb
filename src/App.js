import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<SearchPage/>} />
        
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
