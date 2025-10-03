import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

function Cart({ cart, onRemoveFromCart, onUpdateQuantity }) {
  const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const itemCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      onRemoveFromCart(productId);
    } else {
      onUpdateQuantity(productId, newQuantity);
    }
  };

  return (
    <section className="p-6 bg-[#FFE8DC] min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold font-archivo text-center mb-2 text-gray-800">Shopping Cart</h2>
        <p className="text-gray-600 font-mono text-center mb-8">
          {cart.length === 0 ? "Your cart is waiting to be filled!" : `You have ${itemCount} item(s) in your cart`}
        </p>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
            <p className="text-gray-500 font-archivo text-xl mb-4">Your cart is empty</p>
            <p className="text-gray-400 font-mono mb-8">Discover amazing books and add them to your cart!</p>
            <Link 
              to="/products" 
              className="bg-[#B95723] text-white font-archivo px-8 py-3 rounded-lg hover:bg-[#A04A1F] transition-colors inline-block text-lg"
            >
              Start Shopping <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg p-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0">
                    <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-md" />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 font-archivo">{item.name}</h3>
                      <p className="text-sm text-gray-600 font-mono">by {item.owner}</p>
                      <p className="text-[#B95723] font-bold font-archivo">Rs.{item.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                        className="bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-archivo  font-medium">{item.quantity || 1}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                        className="bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="text-red-800 hover:text-red-500 p-2 transition-colors"
                      title="Remove from cart"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order details */}
            <div className="bg-gray-50 rounded-lg p-6 h-fit sticky top-6">
              <h3 className="text-xl font-bold font-archivo mb-4 text-gray-800">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-archivo text-gray-600">
                  <span>Items ({itemCount})</span>
                  <span>Rs.{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-archivo text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-archivo text-gray-600">
                  <span>Tax</span>
                  <span>Rs.{(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold font-archivo text-gray-800">
                    <span>Total</span>
                    <span>Rs.{(total * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#42625F] text-white font-archivo py-3 rounded-lg hover:bg-[#36524F] transition-colors font-semibold mb-4">
                Proceed to Checkout
              </button>
              
              <Link 
                to="/products" 
                className="block text-center font-mono text-[#B95723] hover:text-[#A04A1F] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;