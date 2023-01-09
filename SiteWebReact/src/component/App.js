import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

import '../styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lobby" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
