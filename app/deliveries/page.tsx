"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { FaCartPlus } from "react-icons/fa";

const Deliveries = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setGoods(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {goods.map((item, idx) => (
        <div key={idx} className="border p-4 rounded shadow-md">
          <img
            src={item.image}
            alt={item.brand}
            className="w-full h-40 object-cover"
          />
          <h2 className="text-xl font-bold mt-2">{item.name}</h2>
          <h2 className="text-xl font-bold mt-2">{item.brand}</h2>
          <h2 className="text-xl font-bold mt-2">{item.price}</h2>
          <p className="text-gray-600">{item.desc}</p>
          <button className="mt-3 w-full bg-[#537D5D] cursor-pointer hover:bg-[#3a5a40] text-white font-medium py-2 px-4 rounded flex items-center justify-center transition-colors">
            <FaCartPlus className="mr-2" />
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Deliveries;
