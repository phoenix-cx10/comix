import React, { useState } from "react";
import products from "../products.json";
import ProductCard from "../components/productCard";
import { Link } from "react-router-dom";

function Products({ onAddToCart, onAddToWishlist, isHomePage = false }) {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(products.map((p) => p.genre))];
  
  const filtered = selectedGenre === "All"
    ? products
    : products.filter((p) => p.genre === selectedGenre);

  const visibleProducts = isHomePage ? filtered.slice(0, 4) : filtered;

  return (
    <section className="p-6 bg-[#ebb9a0]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-archivo text-center mb-2 text-gray-800">
          {isHomePage ? "Browse Products" : "All Products"}
        </h2>
        <p className="text-gray-600 text-center font-mono mb-8">
          {isHomePage ? "Explore our collection" : "Browse our complete collection"}
        </p>

        {!isHomePage && (
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenre(g)}
                className={`px-4 py-2 rounded-full transition-all font-archivo duration-300 ${
                  selectedGenre === g 
                    ? "bg-[#B95723] text-white shadow-md" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {visibleProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </div>

        {isHomePage && filtered.length > 4 && (
          <div className="text-center">
            <Link 
              to="/products"
              className="bg-[#B95723] text-white px-8 py-3 rounded-lg hover:bg-[#A04A1F] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg inline-block">
              View All →
            </Link>
          </div>
        )}

    
        {visibleProducts.length === 0 && (
          <div className="text-center text-gray-500 text-lg py-12">
            No products found in this category
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;