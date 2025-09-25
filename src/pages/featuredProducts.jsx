import React from "react";
import products from "../products.json";
import ProductCard from "../components/productCard";

function FeaturedProducts({ onAddToCart, onAddToWishlist }) {
    
    const featured = products.filter((p) => p.featured)

    return (
       <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFF1EA] py-8">
         <section className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-black font-archivo mb-2">Featured Products</h2>
           <p className="text-gray-900 font-mono text-center mb-8">Discover our most popular books</p>
           
           {featured.length === 0 ? (
             <div className="text-center text-white text-lg">
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
         </section>
       </div>
    )
}

export default FeaturedProducts;