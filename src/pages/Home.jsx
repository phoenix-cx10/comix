import React from "react";
import FeaturedProducts from "./featuredProducts";
import Products from "./products";
import Contact from "../components/contact";

function Home({ onAddToCart, onAddToWishlist }) {

  return (
  <div>
   <section
      className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/home-bg.jpg')" }}
    >

      {/* main content */}
      <div className="relative z-10 max-w-xl text-center text-black pt-2 mb-20">
        <h1 className="text-6xl font-bold font-archivo mb-4">Welcome to Comix</h1>
        <h2 className="text-3xl font-mono mb-4">Your Online Bookstore</h2>
        <p className="mb-8 text-lg font-mono leading-relaxed">
          Discover your next favorite book in our carefully curated collection. From timeless classics to contemporary bestsellers, find stories that inspire.
        </p>
        <button className="  bg-gradient-to-r from-[#ff5f6d] to-[#ff8e53] text-white font-mono font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg hover:scale-110 hover:shadow-[0_0_30px_6px_rgba(255,95,109,0.8)]">
          Explore Collection
        </button>
    </div>
    
      </section>

      <div className="">
        <FeaturedProducts 
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />

        {/* <Products 
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      /> */}
        
      <Contact/>
      </div>
      
      </div>
  );
}

export default Home