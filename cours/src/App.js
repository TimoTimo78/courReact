import "./App.css";
import { Routes, Route } from "react-router-dom";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Formulaire from "./component/Formulaire";
import Header from "./component/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/account" element={<Content />} />
      <Route path="/account" element={<Footer />} />
      <Route path="/account" element={<Formulaire />} />
      <Route path="/account" element={<Header />} />
    </Routes>
  );
}

export default App;