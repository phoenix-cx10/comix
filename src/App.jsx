import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster }from "react-hot-toast";
import toast from "react-hot-toast";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CategoryMenu from './components/categoryMenu';
import Home from "./pages/Home";
import Products from "./pages/products";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import ProductDetail from "./pages/ProductDetail";
import ContactForm from "./components/ContactForm";
import Contact from "./components/contact";
import '../src/index.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Add to cart function
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Remove from cart
        return prevCart.filter(item => item.id !== product.id);
      } else {
        // Add to cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update cart quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  // Remove from cart
  const handleRemoveFromCart = (productId, product) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast.error(`Item Removed from cart!`);
  };

  // Toggle wishlist function
  const handleAddToWishlist = (product) => {
    setWishlist(prevWishlist => {
      const isInWishlist = prevWishlist.some(item => item.id === product.id);
      if (isInWishlist) {
        return prevWishlist.filter(item => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  // Remove from wishlist
  const handleRemoveFromWishlist = (product) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== product.id));
    toast.error(`${product.name} Removed from wishlist!`);
  };

  return (
    <BrowserRouter>
     <Toaster 
        position="top-right"
        toastOptions={{
          duration: 1200,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Navbar
        showMenu={showMenu}
        onToggleMenu={() => setShowMenu(v => !v)}
        cartCount={cart.reduce((total, item) => total + (item.quantity || 1), 0)}
        wishlistCount={wishlist.length}
      />
      {showMenu && <CategoryMenu/>}

      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          } 
        />
        <Route 
          path="/products" 
          element={
            <Products 
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          } 
        />
        <Route 
          path="/wishlist" 
          element={
            <Wishlist 
              wishlist={wishlist}
              onAddToCart={handleAddToCart}
              onRemoveFromWishlist={handleRemoveFromWishlist}
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          } 
        />
        <Route 
  path="/product/:id" 
  element={
    <ProductDetail 
      onAddToCart={handleAddToCart}
      onAddToWishlist={handleAddToWishlist}
    />
  } 
        />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;