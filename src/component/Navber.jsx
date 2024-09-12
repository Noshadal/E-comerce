import React from 'react'

const Navber = () => {
  return (
    <div>
      

<nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 mb-1">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
      <span className="self-center text-2xl hover:border-s-4 font-semibold whitespace-nowrap text- text-teal-400 border-b-4 border-green-400 hover:text-green-400 rounded-lg hover:border-teal-400">Al-Noor</span>
  </a>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm ">
        <a href="/login" className='text-teal-500 text-lg font-semibold hover:text-teal-300'>
        Logout
        </a>
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white90dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 text-teal-300  rounded md:bg-transparent md:text-green-400 md:p-0 md:dark:text-green-400" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-teal-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-teal-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-teal-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-teal-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navber
