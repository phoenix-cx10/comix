import React from "react";
import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";

function Wishlist({ wishlist, onAddToCart, onRemoveFromWishlist }) {
  return (
    <section className="p-6 bg-[#FFE8DC] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">My Wishlist</h2>
        <p className="text-gray-600 text-center mb-8">
          {wishlist.length === 0 ? "Your saved favorite books will appear here" : `You have ${wishlist.length} item(s) in your wishlist`}
        </p>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={80} className="mx-auto text-gray-300 mb-6" />
            <p className="text-gray-500 text-xl mb-4">Your wishlist is empty</p>
            <p className="text-gray-400 mb-8">Start adding books you love by clicking the heart icon!</p>
            <Link 
              to="/products" 
              className="bg-[#B95723] text-white px-8 py-3 rounded-lg hover:bg-[#A04A1F] transition-colors inline-block text-lg"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {wishlist.map((product) => (
                <div key={product.id} className="relative">
                  <div className="bg-white rounded-xl shadow-sm border border-[#C9D5D3] p-4 group">
                    {/* labels*/}
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

                    {/* image*/}
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="bg-gray-50 h-48 w-full rounded-lg mb-4 flex items-center justify-center p-2 border border-[#EBD9D1]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full object-cover rounded-md"
                        />
                      </div>
                    </Link>

                    {/* Product*/}
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">by {product.owner}</p>
                        <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{product.description}</p>
                      </div>
                    </Link>

                    {/* Price and rating*/}
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
                    </div>
                  </div>

                  {/* Remove button*/}
                  <button
                    onClick={() => onRemoveFromWishlist(product)}
                    className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors shadow-lg"
                    title="Remove from wishlist"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link 
                to="/products" 
                className="bg-[#42625F] text-white px-8 py-3 rounded-lg hover:bg-[#36524F] transition-colors inline-block"
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