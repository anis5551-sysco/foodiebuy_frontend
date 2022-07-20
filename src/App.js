import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Searchbar from "./components/Searchbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
