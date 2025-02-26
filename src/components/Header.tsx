import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { sidebarItems } from '../constans';
import { Link } from 'react-router-dom';

interface props {
    title:string
}

const Header = ({title}:props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative bg-gray-800 bg-opacity-50 shadow-lg border-b border-gray-700 z-30">
        <div className="max-w-7x1 mx-auto py-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-100">
                {title}
            </h1>
            <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleDropdown}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit lg:hidden block"
                >
                    <Menu />
            </motion.button>
        </div>
        <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 bg-opacity-95 backdrop-blur-md border border-gray-700 lg:hidden block" // Position dropdown, hide on larger screens
                    >
                        <nav className="py-2">
                            {sidebarItems.map((item, index) => (
                                <Link key={index} to={item.href} className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                                    <div className="flex items-center">
                                        <item.icon size={16} style={{ color: item.color, marginRight: "8px" }} />
                                        {item.name}
                                    </div>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
          </AnimatePresence>
        
    </header>
  )
}

export default Header
