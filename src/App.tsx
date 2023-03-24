import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import ForecastWeather from './pages/forecastWeather/ForecastWeather';
import Homepage from './pages/homepage/Homepage';
import RichTextEditor from './pages/PackageLab/RichTextEditor/RichTextEditor';
import TreeDropdown from './pages/PackageLab/TreeDropdown/TreeDropdown';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="/forecast/:city" element={<ForecastWeather />} />
            <Route path='/package/rich-text-editor' element={<RichTextEditor />} />
            <Route path="/package/tree-dropdown" element={<TreeDropdown />} />
          </Routes>
        </main>
      </Router>

    </div>
  );
}

export default App;
