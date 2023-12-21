import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <main>
          <Routes>
            <Route 
            path='/'
            element={<Home />}
            />
            <Route 
            path='/about'
            element={<About />}
            />
            <Route 
            path='/contact'
            element={<Contact />}
            />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
