import React from "react";
import products from "../products.json";
import ProductCard from "../components/productCard";
import Products from "./products"; 
import { Link } from "react-router-dom";

function FeaturedProducts({ onAddToCart, onAddToWishlist }) {
    
    const featured = products.filter((p) => p.featured)

    return (
       <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#ebb9a0] py-8 mt-10">
         <section className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-black font-archivo mb-2 cursor-default">Featured Products</h2>
           <p className="text-gray-900 font-mono text-center mb-14 cursor-default">Discover our most popular books</p>
           
           {featured.length === 0 ? (
             <div className="text-center text-white text-lg cursor-default">
               No featured products available
             </div>
           ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {featured.map((p) => (
                 <ProductCard
                   key={p.id}
                   product={p}
                   onAddToCart={onAddToCart}
                   onAddToWishlist={onAddToWishlist}
                 />
               ))}
             </div>
          )}
          <div>
          <Link 
            to="/products" 
              className="block text-center bg-[#B95723] text-white font-archivo px-6 py-2 mt-7 rounded-lg hover:bg-[#A04A1F] transition-colors mx-auto w-fit">
               View All Products →
          </Link>
        </div>
        </section>
        
        
       </div>
    )
}

export default FeaturedProducts;