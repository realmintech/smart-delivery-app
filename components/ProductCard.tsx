"use client";

import { useState } from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";

const ProductCard = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const yogurtProducts = [
    {
      id: 1,
      title: "Greek Yogurt",
      creator: "Dr. Culture Queen, Microbiologist",
      rating: 4.7,
      reviews: 388410,
      price: 8900,
      originalPrice: 82909,
      bestseller: true,
      image: "https://images.unsplash.com/photo-1577045058273-9d643f734d6a",
      description:
        "Master artisanal yogurt-making techniques from basic fermentation to advanced flavor infusions",
    },
    {
      id: 2,
      title: "The Complete Fermentation Bootcamp",
      creator: "Dr. Culture Queen, Microbiologist",
      rating: 4.7,
      reviews: 436486,
      price: 9900,
      originalPrice: 91909,
      bestseller: true,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      description:
        "From milk to masterpiece - transform simple ingredients into probiotic-rich delights",
    },
    {
      id: 3,
      title: "[NEW] Ultimate Plant-Based Yogurt Certification",
      creator: "Stephane Ferment | Dairy-Free Expert",
      rating: 4.7,
      reviews: 248404,
      price: 8900,
      originalPrice: 91909,
      bestseller: true,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      description:
        "Create luxurious non-dairy yogurts using nuts, oats, and coconut",
    },
    {
      id: 4,
      title: "The Complete Fermentation Bootcamp",
      creator: "Dr. Culture Queen, Microbiologist",
      rating: 4.7,
      reviews: 436486,
      price: 9900,
      originalPrice: 91909,
      bestseller: true,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      description:
        "From milk to masterpiece - transform simple ingredients into probiotic-rich delights",
    },
    {
      id: 5,
      title: "The Complete Fermentation Bootcamp",
      creator: "Dr. Culture Queen, Microbiologist",
      rating: 4.7,
      reviews: 436486,
      price: 9900,
      originalPrice: 91909,
      bestseller: true,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      description:
        "From milk to masterpiece - transform simple ingredients into probiotic-rich delights",
    },
    {
      id: 6,
      title: "The Complete Fermentation Bootcamp",
      creator: "Dr. Culture Queen, Microbiologist",
      rating: 4.7,
      reviews: 436486,
      price: 9900,
      originalPrice: 91909,
      bestseller: true,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      description:
        "From milk to masterpiece - transform simple ingredients into probiotic-rich delights",
    },
  ];

  return (
    <div className=" p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Yogurt Crafters are viewing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {yogurtProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg overflow-hidden border border-[#2d2d2d] transition-all duration-300 hover:border-[#537D5D]"
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

              <button className="mt-3 w-full bg-[#537D5D] cursor-pointer hover:bg-[#3a5a40] text-white font-medium py-2 px-4 rounded flex items-center justify-center transition-colors">
                <FaCartPlus className="mr-2" />
                Buy Now
              </button>
            </div>

            {/* Hover Tooltip */}
            {hoveredCard === product.id && (
              <div className="absolute bottom-20 left-0 right-0 bg-[#1e1e1e] border border-[#537D5D] m-4 p-3 rounded-lg shadow-lg z-10">
                <h4 className="text-white font-semibold mb-2">
                  Description
                </h4>
                <p className="text-gray-300 text-sm">{product.description}</p>
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-[#1e1e1e] border-b border-r border-[#537D5D] transform rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
