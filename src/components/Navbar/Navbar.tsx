import { useState } from "react";
import logo from "../../assets/images/An-fish.png";
import Cart from "../Cart/Cart";
import { Menu, X } from "lucide-react";
import Login from "../Login/Login";

import type { RefObject } from "react";

function Navbar({ aboutRef }: { aboutRef: RefObject<HTMLDivElement> }) {
  const [openCart, setOpenCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleCart = () => setOpenCart((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleLogin = () => setIsLoginOpen((prev) => !prev);

  // Scroll to About section function
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-3 left-0 right-0 z-50">
        <div className="bg-white shadow-xl rounded-full opacity-85 px-6 md:px-16 w-[90%] max-w-screen-xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <img src={logo} className="w-28 md:w-36" alt="Logo" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 font-Mainlux text-2xl text-black">
            <div
              className="cursor-pointer relative text-black hover:text-anBlue
  before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-anBlue 
  before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
              onClick={scrollToAbout}
            >
              About
            </div>

            <div
              className="cursor-pointer relative text-black hover:text-anBlue
  before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-anBlue 
  before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
            >
              Categories
            </div>
            <div
              className="cursor-pointer relative text-black hover:text-anBlue
  before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-anBlue 
  before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
            >
              Stores
            </div>
            <div
              className="cursor-pointer relative text-black hover:text-anBlue
  before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-anBlue 
  before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
            >
              Spices
            </div>
            <div
              className="cursor-pointer relative text-black hover:text-anBlue
  before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-anBlue 
  before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
            >
              Frozen
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex space-x-4 font-Mainlux text-2xl text-black">
            <div onClick={toggleLogin} className="cursor-pointer">
              Login
            </div>
            <div onClick={toggleCart} className="cursor-pointer">
              Cart
            </div>
          </div>

          {/* Hamburger Icon - Mobile Only */}
          <div className="md:hidden flex items-center space-x-4 text-black">
            <div onClick={toggleLogin} className="cursor-pointer">
              Login
            </div>
            <div onClick={toggleCart} className="cursor-pointer">
              Cart
            </div>
            <button onClick={toggleMenu}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 fixed top-[80px] left-0 right-0 z-40 space-y-4 text-lg font-Mainlux text-black">
          <div
            className="cursor-pointer hover:text-anBlue"
            onClick={scrollToAbout}
          >
            About
          </div>
          <div className="cursor-pointer hover:text-anBlue">Categories</div>
          <div className="cursor-pointer">Stores</div>
          <div className="cursor-pointer">Spices</div>
          <div className="cursor-pointer">Frozen</div>
          <div className="cursor-pointer">Login</div>
        </div>
      )}

      {/* Cart */}
      {openCart && (
        <Cart isOpen={openCart} handleClose={() => setOpenCart(false)} />
      )}

      {/* Login */}
      {isLoginOpen && (
        <Login
          isLoginOpen={isLoginOpen}
          setIsLoginOpen={() => setIsLoginOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
