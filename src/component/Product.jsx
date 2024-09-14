import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navber';
import { useNavigate } from 'react-router-dom';
import Storecard from './Storecard';

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleAddToCart = () => {
    const product = {
      img: state.img,   // Use state here instead of props
      heading: state.heading, // Use state here instead of props
      price: state.price, // Use state here instead of props
      vote: state.vote  // Use state here instead of props
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  if (!state) {
    return <div>Product details not available.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-teal-500 to-green-900 p-8 min-h-screen">
        <img 
          src={state.img} 
          className="h-[60vh] lg:h-[80vh] w-full lg:w-[30vw] object-cover rounded-md shadow-lg transform transition-transform hover:scale-105 duration-300"
          alt={state.heading}
        />
        <div className="flex flex-col justify-center mt-6 lg:mt-0 lg:ml-10 bg-white p-6 rounded-lg shadow-2xl w-full lg:w-[40vw]">
          <h2 className="text-teal-900 text-[6vh] font-bold border-b-4 border-teal-900 mb-4 pb-2 transition-colors duration-300 hover:border-teal-600">
            {state.heading}
          </h2>
          <p className="text-teal-700 text-[4vh] font-semibold mb-4">Price: ${state.price}</p>
          <div className="flex items-center text-teal-700 text-[3vh] font-semibold mb-6">
            Rating: {state.vote}
            <svg className="w-6 h-6 text-yellow-400 ml-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <div className="flex space-x-4">
            <button
              className="font-semibold bg-teal-800 text-white py-3 px-8 rounded-lg text-[3vh] hover:bg-teal-500 hover:text-black transition-colors duration-300 shadow-md transform hover:scale-105"
              onClick={() => navigate('/checkout')}
            >
              BUY NOW
            </button>
            <button
              className="font-semibold bg-teal-800 text-white py-3 px-8 rounded-lg text-[3vh] hover:bg-teal-500 hover:text-black transition-colors duration-300 shadow-md transform hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Storecard/>
    </>
  );
};

export default Product;
