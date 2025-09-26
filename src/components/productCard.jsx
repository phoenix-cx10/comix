import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToWishlist, onAddToCart }) {
  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToWishlist(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#C9D5D3] p-4 group">
      {/* Labels */}
      <div className="flex gap-2 mb-3">
        {product.isHotSale && (
          <span className="bg-[#B95723] text-white px-3 py-1 text-xs rounded-full font-medium">
            Hot Sale
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-[#42625F] text-white px-3 py-1 text-xs rounded-full font-medium">
            Best Seller
          </span>
        )}
      </div>

      {/* Image - Clickable for product page */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="bg-gray-50 h-48 w-full rounded-lg mb-4 flex items-center justify-center p-2 border border-[#EBD9D1] group-hover:scale-105 transition-transform duration-300">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-cover rounded-md"
          />
        </div>
      </Link>

      {/* Product Info - Clickable for product page */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-1 group-hover:text-[#B95723] transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">by {product.owner}</p>
          <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </Link>

      {/* Price + Rating + Actions */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-[#B95723] text-lg">${product.price}</p>
          <div className="flex items-center mt-1">
            <span className="text-xs text-gray-600 mr-1">({product.rating})</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-sm">
                {i < product.rating ? "⭐" : "☆"}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action Icons */}
        <div className="flex gap-2">
          <button
            onClick={handleCartClick}
            className="bg-[#A8BBA3] hover:bg-[#95AA90] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            title="Add to Cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h10M9.5 18h10" />
            </svg>
          </button>
          
          <button
            onClick={handleWishlistClick}
            className="bg-[#EBD9D1] hover:bg-[#DBC9C1] text-[#B95723] p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            title="Add to Wishlist"
          >
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