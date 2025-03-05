import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["business", "entertainment", "health", "science", "sports", "technology"];

  return (
    <>
      {/* Google Fonts Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;600&display=swap');
        `}
      </style>

      <nav className="bg-grey text-red py-2 px-4 shadow-lg">
        <div className="flex justify-between items-center">
          {/* Logo with Unique Hatke Font */}
          <h1 className="text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            NewsApp
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 transition duration-300"
          >
            <Menu size={32} />
          </button>

          {/* Desktop Menu with Hatke Font */}
          <div className="hidden md:flex space-x-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            <Link to="/" className="relative text-lg font-semibold hover:text-yellow-300 transition duration-300">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                className="relative text-lg capitalize hover:text-yellow-300 transition duration-300"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu - Glassmorphic Transparent Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-l-3xl z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="flex justify-between p-4">
            <h2 className="text-lg font-bold text-yellow-300">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-40 transition">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col space-y-4 p-6 text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                className="capitalize hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Background Overlay when Menu is Open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
