import React,{useEffect,useState} from "react";
import { db } from "./firbase.cofig";
import { collection, query, where, onSnapshot ,getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";
import 'animate.css';

const Navber = () => {
  const [userData, setUserData] = useState(null);
  const id = localStorage.getItem('uid');
  useEffect(() => {
    if (id) { // Check if id (UID) exists
      const q = query(
        collection(db, "users"),
        where("uid", "==", id) // Compare the uid field in Firestore to the logged-in user's id
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setUserData(list[0]); // Assuming you're querying one user's profile
      });

      // Cleanup the listener on unmount
      return () => unsubscribe();
    }
  }, [id]);
  return (
    <div>
      

<nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 mb-1">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
      <span className="self-center text-2xl hover:border-s-4 font-semibold whitespace-nowrap text- text-teal-400 border-b-4 border-green-400 hover:text-green-400 rounded-lg hover:border-teal-400">Al-Noor</span>
  </Link>

  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <Link className=" px-4 text-teal-500 text-lg font-semibold hover:text-teal-300" to="/add">Addtocard</Link>
      <button type="button" className="flex text-sm ">
        <Link to="/Profile" className='text-teal-500 text-lg font-semibold hover:text-teal-300'>
        <div>
        {userData ? (
        <div className="flex m-2">
          <p> {userData.firstName} {userData.lastName}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
        </div>
        </Link>
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white90dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="#" className="block py-2 px-3 text-teal-300  rounded md:bg-transparent md:text-green-400 md:p-0 md:dark:text-green-400" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="#" className="block py-2 px-3 text-teal-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link to="#" className="block py-2 px-3 text-teal-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link to="#" className="block py-2 px-3 text-teal-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
      </li>
      <li>
        <Link to="#" className="block py-2 px-3 text-teal-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navber
