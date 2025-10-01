import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products.json";
import { ArrowLeft, Star, Truck, Shield, BookOpen } from "lucide-react";

function ProductDetail({ onAddToCart, onAddToWishlist }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#ebb9a0] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-mono text-gray-800 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-[#B95723] font-archivo hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // related products
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.genre === product.genre)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#EBD9D1]">
      {/* nav back */}
      <div className="font-archivo container mx-auto px-6 py-4">
        <Link to="/products" className="inline-flex items-center text-[#000000] hover:text-[#A04A1F] transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Products */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* image */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-50 rounded-2xl p-4 border border-[#EBD9D1]">
              <img
                src={product.image}
                alt={product.name}
                className="w-90 h-106 object-fill rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 bg-black/0 hover:bg-black/50"
              />
            </div>
            
            {/* hot sale & best seller*/}
            <div className="flex gap-3 mt-6">
              {product.isHotSale && (
                <span className="bg-[#B95723] text-white font-archivo px-4 py-2 rounded-full text-sm font-medium">
                  🔥 Hot Sale
                </span>
              )}
              {product.isBestSeller && (
                <span className="bg-[#42625F] text-white font-archivo px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ Best Seller
                </span>
              )}
            </div>
          </div>

          {/* Product details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-archivo font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-xl font-mono ml-1 text-gray-600 mb-4">by {product.owner}</p>
              
              {/* Ratings */}
              <div className="flex items-center font-archivo gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating}/5)</span>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold font-archivo text-[#B95723] mb-2">Rs.{product.price}</p>
              
              {/* Genre */}
              <span className="inline-block font-archivo bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {product.genre}
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold font-archivo mb-2">Description</h3>
              <p className="text-gray-700 font-mono leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-4 font-mono">
              <div className="flex items-center gap-2 text-gray-600">
                <Truck size={20} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield size={20} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen size={20} />
                <span>Instant Download</span>
              </div>
            </div>

            {/* wishlist & cart buttons */}
            <div className="flex gap-4 pt-4 font-archivo">
              <button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-[#42625F] text-white py-3 px-6 rounded-lg hover:bg-[#36524F] transition-all duration-300 hover:scale-105 font-semibold"
              >
                Add to Cart
              </button>
              <button
                onClick={() => onAddToWishlist(product)}
                className="flex-1 bg-[#EBD9D1] text-[#B95723] py-3 px-6 rounded-lg hover:bg-[#DBC9C1] transition-all duration-300 hover:scale-105 font-semibold border border-[#B95723]"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold font-archivo text-gray-800 mb-6">Related Books</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-gray-50 rounded-lg p-4 mt-4 mb-6 border border-[#EBD9D1]">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-80 rounded-md mb-3 object-fill
                    "
                  />
                  <h4 className="font-semibold text-gray-800 line-clamp-1 font-archivo">{relatedProduct.name}</h4>
                  <p className="text-sm text-gray-600 font-mono">by {relatedProduct.owner}</p>
                  <p className="text-[#B95723] font-archivo font-bold">Rs.{relatedProduct.price}</p>
                  <Link 
                    to={`/product/${relatedProduct.id}`}
                    className="text-lg text-[#42625F] font-archivo hover:underline mt-2 inline-block"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ProductDetail;