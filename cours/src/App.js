import './App.css';
import { Routes, Route } from 'react-router-dom';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Formulaire from './Component/Formulaire';
import Header from './Component/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />}/>
      <Route path="/account" element={<Header />}/>
    </Routes>
  );
}

export default App;