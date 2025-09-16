import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkBrand from "../img/logo/brand.png";
import LightBrand from "../img/logo/lightBrand.png";

const navLinks = [
  { href: "#journal", label: "Journal" },
  { href: "#timeLines", label: "TimeLines" },
  { href: "#analytics", label: "Analytics" },
  { href: "#feedback", label: "Feedback" },
];

const Header = ({ mode, setMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white dark:bg-[#121316] transition-colors duration-300">
      <div className=" border-b border-gray-300 dark:border-gray-800">
        <Container maxWidth="lg">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={LightBrand}
                alt="Logo"
                className="block dark:hidden h-12 "
              />
              <img
                src={DarkBrand}
                alt="Logo"
                className="hidden dark:block h-12"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden sm:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative font-medium text-gray-900 dark:text-white hover:text-purple-400 
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                           after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 
                           hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + DarkMode Toggle + Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* Dark/Light Mode Toggle */}
              <IconButton
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? (
                  <DarkModeIcon className="text-gray-900" />
                ) : (
                  <LightModeIcon className="text-yellow-400" />
                )}
              </IconButton>

              {/* Login Button */}
              <Link
                to="/signup"
                className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r 
                         from-purple-600 to-pink-500 rounded-full shadow hover:opacity-90"
              >
                Login
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? (
                  <IoCloseSharp className="w-6 h-6 text-gray-900 dark:text-white" />
                ) : (
                  <HiMiniBars3BottomRight className="w-6 h-6 text-gray-900 dark:text-white" />
                )}
              </button>
            </div>
          </nav>
        </Container>
      </div>

      {/* Mobile Nav */}
      <Container maxWidth="lg">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 absolute left-5 right-5 bg-white dark:bg-[#121316] border border-gray-300 dark:border-gray-800 rounded-2xl py-4  sm:hidden shadow-lg"
            >
              <div className="flex flex-col space-y-4 text-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-base font-medium text-gray-900 dark:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Header;
