"use client";

import { useParams } from "next/navigation";
import { yogurtProducts } from "../../../data/products.json";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const product = yogurtProducts.find((p) => p.id === productId);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleAddToCart = () => {
    if (!product) return;

    const cartString = localStorage.getItem("cart");
    const currentCart = cartString ? JSON.parse(cartString) : [];
    const existingItemIndex = currentCart.findIndex(
      (item) => item.id === product.id
    );
    let updatedCart;

    if (existingItemIndex >= 0) {
      updatedCart = [...currentCart];
      updatedCart[existingItemIndex].quantity + quantity;
    } else {
      updatedCart = [...currentCart, { ...product, quantity }];
    }

    updateCart(updatedCart);
    alert(`${quantity} ${product.title} added to cart!`);
    setQuantity(1); // Reset quantity after adding
  };

  const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 99));
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${product.image}?w=800&h=600&fit=crop&auto=format`}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.bestseller && (
              <span className="bg-[#537D5D] text-black text-sm font-bold px-3 py-1 rounded inline-block">
                Bestseller
              </span>
            )}

            <h1 className="text-3xl font-bold">{product.title}</h1>

            <p className="text-gray-300">By {product.creator}</p>

            <div className="flex items-center">
              <span className="text-[#ff6f00] font-bold mr-1">
                {product.rating}
              </span>
              <div className="flex text-[#ff6f00]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-gray-300 text-sm ml-1">
                ({(product.reviews / 1000).toFixed(1)}k reviews)
              </span>
            </div>

            <div className="py-4 border-t border-b border-gray-700">
              <span className="text-2xl font-bold">
                ₦{(product.price / 100).toFixed(2)}
              </span>
              <span className="text-gray-400 text-lg line-through ml-3">
                ₦{(product.originalPrice / 100).toFixed(2)}
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-gray-300">{product.description}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-600 rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 text-gray-300 hover:bg-gray-700 transition"
                  disabled={quantity <= 1}
                >
                  <FaMinus className="w-3 h-3" />
                </button>
                <span className="px-4 py-1 text-center w-12">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 text-gray-300 hover:bg-gray-700 transition"
                  disabled={quantity >= 99}
                >
                  <FaPlus className="w-3 h-3" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#537D5D] hover:bg-[#3a5a40] text-white font-medium py-3 px-6 rounded transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}