import React, { useEffect, useState } from 'react';
import { db } from "./firbase.cofig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  
  const navig = useNavigate();
  const id = localStorage.getItem('uid'); // Retrieve UID from localStorage
  
  function logouthandle() {
    localStorage.removeItem('uid')
    navig("/login");
  } 

  useEffect(() => {
    if (id) { 
      const q = query(
        collection(db, "users"),
        where("uid", "==", id)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setUserData(list[0]); // Assuming you're querying one user's profile
      });

      return () => unsubscribe();
    }
  }, [id]);

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>Profile</h1>

        {userData ? (
          <div className='space-y-4'>
            <p className='text-lg'><span className='font-semibold'>Name:</span> {userData.firstName} {userData.lastName}</p>
            <p className='text-lg'><span className='font-semibold'>Email:</span> {userData.email}</p>
            <p className='text-lg'><span className='font-semibold'>Phone:</span> {userData.phone}</p>
            <p className='text-lg'><span className='font-semibold'>Address:</span> {userData.address}</p>
            <p className='text-lg'><span className='font-semibold'>Password:</span> {userData.psw}</p>

            <button 
              className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors duration-200' 
              onClick={logouthandle}
            >
              Logout
            </button>
          </div>
        ) : (
          <p className='text-center text-gray-500'>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
