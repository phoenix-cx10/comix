import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToWishlist, onAddToCart }) {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="block bg-[#69807A] rounded-2xl p-4 w-full max-w-xs border border-[#C9D5D3] hover:drop-shadow-lg ease-in-out hover:backdrop-blur-3xl hover:scale-105 transition-shadow duration-300 cursor-pointer"
    >
      {/* Labels */}
      <div className="flex gap-2 mb-3">
        {product.isHotSale && (
          <span className="bg-[#fc1a1a] text-white px-3 py-1 text-xs rounded-full font-medium">
            Hot Sale
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-[#fded11] text-black px-3 py-1 text-xs rounded-full font-medium">
            Best Seller
          </span>
        )}
      </div>

      {/* Image */}
      <div className="bg-white h-48 w-full rounded-xl mb-4 flex items-center justify-center p-2 border border-[#EBD9D1]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h3 className="font-semibold text-black text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-[#0a0a0a] text-sm mb-2">by {product.owner}</p>
        <p className="text-[#0e0e0e] text-xs line-clamp-2 leading-relaxed">{product.description}</p>
      </div>

      {/* Price + Rating + Actions */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-[#ffffff] text-lg">${product.price}</p>
          <div className="flex items-center mt-1">
            <span className="text-xs text-[#fff] mr-1">({product.rating})</span>
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-[#B95723] hover:bg-[#ebbba1] text-white hover:text-[#B95723] p-2 rounded-full transition-colors duration-200"
            title="Add to Cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h10M9.5 18h10" />
            </svg>
          </button>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToWishlist(product);
            }}
            className="bg-[#ffc6ad] hover:bg-[#ff8080] text-[#ff1e00] p-2 rounded-full transition-colors duration-200"
            title="Add to Wishlist"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;