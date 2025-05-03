import "../styles/Navbar.css"

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
              </div>
            </div>

            </nav>
        </div>
    )
}
export default NavBar