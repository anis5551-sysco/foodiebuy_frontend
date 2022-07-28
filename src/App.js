import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Searchbar from "./components/Searchbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Alert from "./components/shared/Alert";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Searchbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/test" element={<Alert />} />
      </Routes>
    </div>
  );
}

export default App;
