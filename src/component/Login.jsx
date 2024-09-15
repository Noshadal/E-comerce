import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from './firbase.cofig';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when button is clicked
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      Swal.fire({
        title: 'User Successfully Logged In!',
        icon: 'success',
      });

      // Store the user's UID in localStorage
      localStorage.setItem('uid', user.uid);

      // Navigate to the home page
      navigate('/home');
    } catch (error) {
      Swal.fire({
        title: 'Something Went Wrong!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    } finally {
      setLoading(false); // Stop loading after the process is complete
    }
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4 sm:px-0'>
      <form className="w-full sm:w-[75vw] max-w-md mx-auto border-2 p-6 flex flex-col justify-center items-center gap-6 rounded-md shadow-lg">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div className='flex flex-col justify-center items-center w-full gap-4'>
          <button
            type="submit"
            className="w-full sm:w-52 bg-blue-700 text-[18px] sm:text-[20px] h-12 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg flex justify-center items-center"
            onClick={handleLogin}
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l-3 3-3-3V4a8 8 0 010 16v-4z"></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
          <Link to="/sign" className='text-blue-800 font-semibold hover:text-blue-500'>Don't have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
