import React, { useEffect, useState } from 'react';
import Navber from './Navber';
import Storecard from './Storecard';

const Addtocard = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Retrieve the cart from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    }
  }, []);

  const handleProductDelete = (index) => {
    const updatedCart = [...cartProducts]; // Create a copy of the cart
    updatedCart.splice(index, 1); // Remove the product at the specified index
    setCartProducts(updatedCart); // Update the cart state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save the updated cart to localStorage
  };

  if (cartProducts.length === 0) {
    return (
      <>
      <Navber/>

      <div className="flex justify-center items-center min-h-screen bg-teal-700">
        <p className="text-xl font-semibold ">No products in the cart.</p>
      </div>
      </>
    );
  }

  return (
    <>
    <Navber/>
    <div className="p-6 flex flex-col items-center bg-teal-500 min-h-screen w-full">
      <h1 className="text-3xl font-bold mb-6 text-teal-900">Products in Cart</h1>
      <div className="grid gap-6 w-full max-w-4xl">
        {cartProducts.map((product, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105"
          >
            <img
              src={product.img}
              className="h-28 w-24 object-cover rounded-lg shadow-md"
              alt={product.heading}
            />
            <div className="ml-6 flex-1">
              <h2 className="text-xl font-semibold text-teal-900 mb-2 truncate">{product.heading}</h2>
              <p className="text-lg text-gray-700">Price: {product.price}</p>
            </div>
            <button
              onClick={() => handleProductDelete(index)} // Delete only the selected product
              className="ml-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
    <Storecard/>
    </>
  );
};

export default Addtocard;
