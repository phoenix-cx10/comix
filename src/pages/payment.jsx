import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Package, Truck, Home, ShoppingBag } from "lucide-react";

function Payment() {
  return (
    <section className="p-6 bg-[#FFE8DC] min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          
          <div className="flex justify-center mb-6">
            <CheckCircle size={80} className="text-green-500" />
          </div>
          

          <h1 className="text-3xl font-bold font-archivo text-gray-800 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 font-mono mb-2">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          <p className="text-gray-500 font-mono text-sm mb-8">
            You will receive an email confirmation shortly.
          </p>

         
          <div className="flex justify-between items-center mb-8 max-w-md mx-auto">
            <div className="text-center">
              <Package size={32} className="text-[#B95723] mx-auto mb-2" />
              <p className="text-xs font-mono text-gray-600">Processing</p>
            </div>
            <div className="h-0.5 bg-gray-300 flex-1 mx-4"></div>
            <div className="text-center">
              <Truck size={32} className="text-gray-400 mx-auto mb-2" />
              <p className="text-xs font-mono text-gray-400">Shipped</p>
            </div>
          </div>

        
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-[#B95723] text-white font-archivo px-6 py-3 rounded-lg hover:bg-[#A04A1F] transition-colors inline-flex items-center justify-center"
            >
              <Home size={20} className="mr-2" />
              Back to Home
            </Link>
            <Link 
              to="/products" 
              className="bg-[#42625F] text-white font-archivo px-6 py-3 rounded-lg hover:bg-[#36524F] transition-colors inline-flex items-center justify-center"
            >
              <ShoppingBag size={20} className="mr-2" />
              Continue Shopping
            </Link>
          </div>

          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-mono text-gray-600">
              📧 Order confirmation sent to your email<br/>
              🚚 Expected delivery: 3-5 business days<br/>
              📞 Need help? Contact support@comix.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
