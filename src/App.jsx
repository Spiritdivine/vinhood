import './App.css';
import Home from './pages/home';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./component/card/cardet";
import Character from './pages/Charact';

import Locale from './pages/Locale';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/character" element={<Character/>} />
        <Route path="/character/:id" element={<CardDetails />} />

        <Route path="/location" element={<Locale />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
