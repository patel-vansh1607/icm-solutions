import "../styles/Navbar.css"
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, ChevronDown } from 'lucide-react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <div className="main-div">
            <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white shadow-md py-2' 
                  : 'bg-transparent py-4'
              }`}
            >
                <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold text-emerald-800 flex items-center">
                    <span className="text-3xl mr-2">🌱</span>
                    <span className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>GrowWell</span>
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <div className="relative group">
                    <button className={`flex items-center space-x-1 transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'} hover:text-emerald-600`}>
                        <span>Products</span>
                        <ChevronDown size={16} />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <Link href="/seeds/vegetables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Vegetable Seeds</Link>
                        <Link href="/seeds/flowers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Flower Seeds</Link>
                        <Link href="/seeds/herbs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Herb Seeds</Link>
                        <Link href="/seeds/fruits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Fruit Seeds</Link>
                    </div>
                    </div>
                    
                    <Link 
                    href="/growing-guides" 
                    className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'} hover:text-emerald-600`}
                    >
                    Growing Guides
                    </Link>
                    
                    <Link 
                    href="/about" 
                    className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'} hover:text-emerald-600`}
                    >
                    About Us
                    </Link>
                    
                    <Link 
                    href="/contact" 
                    className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'} hover:text-emerald-600`}
                    >
                    Contact
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-4">
                    <button className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'} hover:text-emerald-600`}>
                    <Search size={20} />
                    </button>
                    <button className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'} hover:text-emerald-600`}>
                    <ShoppingCart size={20} />
                    </button>
                    <Link 
                    href="/account" 
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition duration-300"
                    >
                    Sign In
                    </Link>
                </div>
                
                <div className="md:hidden">
                    <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'}`}
                    >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                </div>
            </div>
            
            {/* Mobile menu */}
            <div className={`md:hidden bg-white w-full shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
                <div className="container mx-auto px-4 flex flex-col space-y-4">
                <Link href="/seeds/vegetables" className="py-2 text-gray-700 hover:text-emerald-600">Vegetable Seeds</Link>
                <Link href="/seeds/flowers" className="py-2 text-gray-700 hover:text-emerald-600">Flower Seeds</Link>
                <Link href="/seeds/herbs" className="py-2 text-gray-700 hover:text-emerald-600">Herb Seeds</Link>
                <Link href="/seeds/fruits" className="py-2 text-gray-700 hover:text-emerald-600">Fruit Seeds</Link>
                <Link href="/growing-guides" className="py-2 text-gray-700 hover:text-emerald-600">Growing Guides</Link>
                <Link href="/about" className="py-2 text-gray-700 hover:text-emerald-600">About Us</Link>
                <Link href="/contact" className="py-2 text-gray-700 hover:text-emerald-600">Contact</Link>
                <Link href="/account" className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md text-center">Sign In</Link>
                </div>
            </div>
            </nav>
        </div>
    )
}
export default NavBar