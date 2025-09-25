import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CategoryMenu from './components/categoryMenu';
import Home from "./pages/Home";
import '../src/index.css'


function App() {

  const [showMenu, setShowMenu] = useState(false);
   const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    console.log("Added to cart:", product.name);
  };

  const handleAddToWishlist = (product) => {
    setWishlist(prevWishlist => [...prevWishlist, product]);
    console.log("Added to wishlist:", product.name);
  };

  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar
        showMenu={showMenu}
        onToggleMenu={() => setShowMenu(v => !v)}
      />
      {showMenu && <CategoryMenu/>}

      <Routes>
        <Route path="/" element={<Home  onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist}/>} />
        
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
