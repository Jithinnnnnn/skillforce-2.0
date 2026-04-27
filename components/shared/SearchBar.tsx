"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export function SearchBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide search bar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setSearchOpen(false); // Close search when hiding
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Handle search functionality here
      console.log("Searching for:", searchValue);
      // You can add actual search logic here
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="pointer-events-none fixed inset-x-0 top-20 z-30 flex justify-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              delay: 0.1,
            }}
            className="pointer-events-auto w-full max-w-2xl"
          >
            <div className="relative">
              {/* Main Search Bar - Matching Reference Design */}
              <div className="flex items-center rounded-full border border-gray-300 bg-white shadow-lg overflow-hidden">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  placeholder="What do you need help with?"
                  className="flex-1 px-4 py-3 sm:px-6 sm:py-4 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-white hover:opacity-90 transition-opacity m-1"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
              
              {/* Dropdown for expanded search */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full z-50 mt-2 w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-600">Popular searches:</p>
                        <div className="flex flex-wrap gap-2">
                          {["Remote Jobs", "Customer Service", "Operations", "Field Work", "Part-time"].map((tag) => (
                            <button
                              key={tag}
                              onClick={() => {
                                setSearchValue(tag);
                                setSearchOpen(false);
                              }}
                              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 transition-colors sm:px-3"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-600">Recent searches:</p>
                        <div className="space-y-1">
                          {["Warehouse jobs near me", "Customer support remote", "Part-time evening shifts"].map((recent, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSearchValue(recent);
                                setSearchOpen(false);
                              }}
                              className="block w-full text-left text-xs text-gray-500 hover:text-primary transition-colors"
                            >
                              {recent}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                      <span className="hidden sm:block">Press Enter to search</span>
                      <button
                        type="button"
                        onClick={() => setSearchOpen(false)}
                        className="text-gray-400 hover:text-gray-600 ml-auto"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}