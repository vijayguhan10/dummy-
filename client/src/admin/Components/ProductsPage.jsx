import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductsPage = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const products = [
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcsy4CVALNrsD0vbh8win4dxB0BtZqZzNF2OrPBOfW51AtSL7kThhHiSW5GnGDGPmapvgEqQ85kZK058qYpv6tzR_6j6trfGDsXeNBUt60rerQHmKYb4hCxw",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnQfxR8Pgyf5PCmeQplhwiUwEGG1Pf9HNgFEjliVokAZhfAkuNNIO1zBKt2hJceKS8tqIWxGlbZJFkFo_K2xYmKtGtaKFbpYJ2Q6lnDzE9",
    },
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://cdn.rajwadi.com/image/cache/data/peach-color-indowestern-in-silk-fabric-47113-297x408.jpg",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnQfxR8Pgyf5PCmeQplhwiUwEGG1Pf9HNgFEjliVokAZhfAkuNNIO1zBKt2hJceKS8tqIWxGlbZJFkFo_K2xYmKtGtaKFbpYJ2Q6lnDzE9",
    },
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://successmenswear.com/cdn/shop/files/Z1_550x.jpg?v=1714477615",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://cdn.rajwadi.com/image/cache/data/peach-color-indowestern-in-silk-fabric-47113-297x408.jpg",
    },
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcsy4CVALNrsD0vbh8win4dxB0BtZqZzNF2OrPBOfW51AtSL7kThhHiSW5GnGDGPmapvgEqQ85kZK058qYpv6tzR_6j6trfGDsXeNBUt60rerQHmKYb4hCxw",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://successmenswear.com/cdn/shop/files/FW_550x.jpg?v=1702723086",
    },
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://successmenswear.com/cdn/shop/files/Z1_550x.jpg?v=1714477615",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnQfxR8Pgyf5PCmeQplhwiUwEGG1Pf9HNgFEjliVokAZhfAkuNNIO1zBKt2hJceKS8tqIWxGlbZJFkFo_K2xYmKtGtaKFbpYJ2Q6lnDzE9",
    },
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://successmenswear.com/cdn/shop/files/FW_550x.jpg?v=1702723086",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnQfxR8Pgyf5PCmeQplhwiUwEGG1Pf9HNgFEjliVokAZhfAkuNNIO1zBKt2hJceKS8tqIWxGlbZJFkFo_K2xYmKtGtaKFbpYJ2Q6lnDzE9",
    },
  ];

  return (
    <div className="">
      <SideBar />
      <div className=" w-full font-Mona text-xl">
        <h1 className="text-2xl font-bold xl:mr-[53%] mr-40 font-Cabin mb-4">{greeting}, Vijay</h1>
        <div className="grid grid-cols-1  xl:ml-72 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {products.map((product) => (
            <div key={product.id}>
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-96 space-y-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-60 h-60  rounded-lg mb-4"
                />

                <div className="flex flex-col  font-Cabin w-full space-y-2">
                  <div className="flex justify-between font-Cabin text-xl">
                    <span className="text-gray-500 text-xl font-semibold">
                      Name:
                    </span>
                    <span className="text-black text-xl font-bold">
                      {product.name}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 text-xl font-semibold">
                      Price:
                    </span>
                    <span className="text-black text-xl font-bold">
                      {product.price}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 text-xl font-semibold">
                      Stock Availability:
                    </span>
                    <span
                      className={`text-xl font-bold ${
                        product.available ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {product.available ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 text-xl font-semibold">
                      Total Revenue:
                    </span>
                    <span className="text-black text-xl font-bold">
                      $
                      {parseInt(product.price.replace("$", "")) *
                        product.totalPurchases}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-4">
                  <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    <FaEdit color="white" />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700">
                    <FaTrashAlt color="white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
