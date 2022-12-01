import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './component/Navbar'
import Exercise from './pages/Exercise';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/exercise/:id" element={<Exercise />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App