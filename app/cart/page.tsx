"use client";

import React, { useEffect, useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    loadCartItems();
  }, []);

  useEffect(() => {
    calculateSubtotal();
  }, [cartItems]);

  const loadCartItems = () => {
    if (typeof window !== "undefined") {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(savedCart);
    }
  };

  const calculateSubtotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    // Add your checkout logic here
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading cart...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7f7] to-[#e8f5e9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2e7d32] mb-2 text-center">
          Your Shopping Cart
        </h1>
        <p className="text-center text-gray-600 mb-12">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your
          cart
        </p>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6">
              <MdShoppingCartCheckout className="text-6xl text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Start shopping to add items to your cart
            </p>
            <button className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Cart Items Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#f5f5f5]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-[#f9f9f9] transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16">
                            <img
                              className="h-full w-full object-cover rounded-md"
                              src={item.image}
                              alt={item.title}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.brand || item.creator}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₦{(item.price / 100).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                          >
                            <FaMinus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                          >
                            <FaPlus className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ₦{((item.price * item.quantity) / 100).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50"
                        >
                          <FaTrash className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Order Summary */}
            <div className="bg-[#f9f9f9] px-6 py-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Order Summary
                  </h3>
                  <p className="text-sm text-gray-500">
                    Shipping and taxes calculated at checkout
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">
                    Subtotal (
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                    items)
                  </p>
                  <p className="text-xl font-bold text-[#2e7d32]">
                    ₦{(subtotal / 100).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center"
                >
                  <MdShoppingCartCheckout className="mr-2" />
                  Proceed to Checkout
                </button>
              </div>
              <div className="mt-4 text-center">
                <button className="text-sm text-[#2e7d32] hover:text-[#1b5e20] font-medium">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
