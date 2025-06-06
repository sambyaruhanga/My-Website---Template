import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Posts from './pages/Posts';
import HireMe from './pages/HireMe';
import Projects from './pages/Projects';
import MachineLearning from './pages/MachineLearning';
import WebDevelopment from './pages/WebDevelopment';
import DataAnalysis from './pages/DataAnalysis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/hire-me' element={<HireMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/machine-learning' element={<MachineLearning />} />
        <Route path='/projects/web-development' element={<WebDevelopment />} />
        <Route path='/projects/data-analysis' element={<DataAnalysis />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
