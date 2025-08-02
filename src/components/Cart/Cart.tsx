import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CartProps } from "./types";
import { mockCart as initialCart } from "../../mocks/mockCart";

function Cart({ isOpen, handleClose }: CartProps) {
  const [cartItems, setCartItems] = useState(initialCart);
  const shippingCost = 10;

  const handleIncrement = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-xl z-50 overflow-y-auto backdrop-blur-md"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              Your Basket
              <span className="bg-anBlueLight text-anBlue px-2 py-0.5 rounded-full text-sm font-medium">
                {cartItems.length}
              </span>
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-anBlue text-2xl font-bold"
            >
              &times;
            </button>
          </div>

          {/* Cart Items */}
          <div className="divide-y">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 transition hover:bg-gray-50"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl shadow-sm"
                />
                <div className="flex-1">
                  <h3 className="text-gray-800 font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">₹{item.price}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-xs text-red-400 mt-1 hover:underline"
                  >
                    Remove
                  </button>
                </div>
                <div className="border rounded px-2 py-1 flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    -
                  </button>
                  <span className="text-black">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Offers */}
          <div className="px-4 pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Select your offered product
            </h3>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="min-w-[130px] bg-gray-100 p-3 rounded-xl text-center shadow-sm"
                >
                  <img
                    src="https://via.placeholder.com/80"
                    className="rounded-xl mb-2 mx-auto"
                  />
                  <p className="text-sm font-medium text-gray-800">
                    Slice Meat
                  </p>
                  <p className="text-sm text-gray-600">₹30</p>
                  <button className="mt-2 px-3 py-1 border border-red-500 text-red-500 rounded-full text-sm hover:bg-red-100 transition">
                    Add to Buy
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t mt-2 p-5 space-y-3 text-gray-800">
            <h4 className="text-lg font-semibold">Order Summary</h4>
            <div className="flex justify-between text-sm">
              <span>Total Products ({cartItems.length})</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping Cost</span>
              <span>₹{shippingCost}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-base">
              <span>Total Cost</span>
              <span>₹{(totalAmount + shippingCost).toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout */}
          <div className="p-5 pt-2">
            <button className="w-full bg-anBlue text-white py-3 rounded-full font-semibold shadow-md hover:scale-[1.02] transition">
              Checkout
            </button>
            <p className="text-xs text-center text-gray-500 mt-1">
              Payment Processed Securely
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Cart;
