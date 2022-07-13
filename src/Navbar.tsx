import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="font-Poppins border-gray-200 bg-white dark:bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-2.5 md:px-6">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Ember
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="https://github.com/Team-Asyncc/ember"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Github
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
