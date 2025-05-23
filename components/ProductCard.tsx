"use client";

import { useState } from "react";
import { FaStar, FaReadme } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { yogurtProducts } from "../data/products.json";


const ProductCard = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  const handleViewDetails = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="p-6 bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text)]">
      <h2 className="text-2xl font-bold text-white mb-6">
        Yogurt Crafters are viewing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {yogurtProducts.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg overflow-hidden border border-[#2d2d2d] transition-all duration-300 hover:border-[#537D5D]"
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Product Image */}
            <div className="h-48 bg-gray-800 relative">
              <img
                src={`${product.image}?w=400&h=300&fit=crop&auto=format`}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.bestseller && (
                <span className="absolute top-2 left-2 bg-[#537D5D] text-black text-xs font-bold px-2 py-1 rounded">
                  Bestseller
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-white font-semibold line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-700 text-sm mt-1">{product.creator}</p>

              <div className="flex items-center mt-2">
                <span className="text-[#ff6f00] font-bold mr-1">
                  {product.rating}
                </span>
                <div className="flex text-[#ff6f00]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3 h-3" />
                  ))}
                </div>
                <span className="text-gray-700 text-xs ml-1">
                  ({(product.reviews / 1000).toFixed(1)}k)
                </span>
              </div>

              <div className="mt-2">
                <span className="text-white font-bold">
                  ₦{(product.price / 100).toFixed(2)}
                </span>
                <span className="text-gray-700 text-sm line-through ml-2">
                  ₦{(product.originalPrice / 100).toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => handleViewDetails(product.id)}
                className="mt-3 w-full bg-[#537D5D] cursor-pointer hover:bg-[#3a5a40] text-white font-medium py-2 px-4 rounded flex items-center justify-center transition-colors"
              >
                <FaReadme className="mr-2 text-2xl" />
                View Details
              </button>

              {/* Hover Tooltip */}
              {hoveredCard === product.id && (
                <div className="absolute bottom-20 left-0 right-0 bg-[#1e1e1e] border border-[#537D5D] m-4 p-3 rounded-lg shadow-lg z-10">
                  <h4 className="text-white font-semibold mb-2">Description</h4>
                  <p className="text-gray-300 text-sm">{product.description}</p>
                  <div className="absolute -bottom-2 left-4 w-4 h-4 bg-[#1e1e1e] border-b border-r border-[#537D5D] transform rotate-45"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;