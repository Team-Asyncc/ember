import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="font-Poppins bg-white border-gray-200 dark:bg-gray-800">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ember</span>
        </a>
        <div className="flex items-center">
            <a href="https://github.com/Team-Asyncc/ember" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Github</a>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar