import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetail from './pages/ShowDetail';
import Footer from './components/Footer';

const App = () => (
  <Router basename="/SDU_FilmListesi_React">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show/:id" element={<ShowDetail />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
