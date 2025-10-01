import React from "react";
import ProductCard from "../components/productCard";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function Wishlist({ wishlist, onAddToCart, onRemoveFromWishlist }) {
  return (
    <section className="p-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold font-archivo text-center mb-2 text-gray-800">My Wishlist</h2>
        <p className="text-gray-600 text-center font-mono mb-8">
          {wishlist.length === 0 ? "Your saved favorite books will appear here" : `You have ${wishlist.length} item(s) in your wishlist`}
        </p>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={80} className="mx-auto text-gray-300 mb-6" />
            <p className="text-gray-500 text-xl font-archivo mb-4">Your wishlist is empty</p>
            <p className="text-gray-400 font-mono mb-8">Start adding books you love by clicking the heart icon!</p>
            <Link 
              to="/products" 
              className="bg-[#B95723] text-white px-8 py-3 font-archivo rounded-lg hover:bg-[#A04A1F] transition-colors inline-block text-lg"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {wishlist.map((product) => (
                <div key={product.id} className="relative">
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                    onAddToWishlist={onRemoveFromWishlist} // This toggles removal
                  />
                  <button
                    onClick={() => onRemoveFromWishlist(product)}
                    className="absolute top-3 right-3 bg-red-700 text-white rounded-full p-1 hover:bg-red-500 transition-colors shadow-lg"
                    title="Remove from wishlist"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link 
                to="/products" 
                className="bg-[#42625F] text-white font-archivo px-8 py-3 rounded-lg hover:bg-[#36524F] transition-colors inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Wishlist;