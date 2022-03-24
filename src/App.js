import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailViewContainer from './containers/DetailViewContainer/DetailViewContainer';
import HomePageContainer from './containers/HomePage/HomePageContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/detailView" element={<DetailViewContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
