import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToWishlist, onAddToCart }) {
  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    const button = e.currentTarget;
   const isPressed = button.getAttribute('aria-pressed') === 'true';
   button.setAttribute('aria-pressed', (!isPressed).toString());
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToWishlist(product);
    const button = e.currentTarget;
   const isPressed = button.getAttribute('aria-pressed') === 'true';
   button.setAttribute('aria-pressed', (!isPressed).toString());
  };

  
  

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#C9D5D3] p-4 group">
      {/* Labels */}
      <div className="flex gap-2 mb-3">
        {product.isHotSale && (
          <span className="bg-[#B95723] text-white font-archivo px-3 py-1 text-xs rounded-full font-medium animate-pulse shadow-lg shadow-[#B95723]/50">
            Hot Sale
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-[#42625F] text-white font-archivo px-3 py-1 text-xs rounded-full font-medium">
            Best Seller
          </span>
        )}
      </div>

      {/* Image*/}
      <Link to={`/product/${product.id}`} className="block">
        <div className="bg-gray-50 h-48 w-full rounded-lg mb-4 flex items-center justify-center p-2 border border-[#EBD9D1] group-hover:scale-105 transition-transform duration-300">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-cover rounded-md"
          />
        </div>
      </Link>

      {/* Product Info */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 font-archivo text-lg mb-1 line-clamp-1 group-hover:text-[#B95723] transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 font-archivo text-sm mb-2">by {product.owner}</p>
          <p className="text-gray-500 font-mono text-xs line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </Link>

      {/* Price & Ratings*/}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-[#B95723] text-lg font-archivo">Rs.{product.price}</p>
          <div className="flex items-center mt-1">
            <span className="text-xs text-gray-600 mr-1">({product.rating})</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-sm">
                {i < product.rating ? "⭐" : "☆"}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action icons */}
        <div className="flex gap-2">
          <button
            onClick={handleCartClick}
            className="bg-[#85bb76] hover:bg-[#89ee70] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md aria-pressed:bg-[#66d849] aria-pressed:text-[#dfe6de]"
            title="Add to Cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h10M9.5 18h10" />
            </svg>
          </button>
          
        <button
            onClick={handleWishlistClick}
            className="bg-[#EBD9D1] hover:bg-[#ffad89] text-[#B95723] p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md aria-pressed:bg-[#B95723] aria-pressed:text-[#EBD9D1]"
            title="Add to Wishlist">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;