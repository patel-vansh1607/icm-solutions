import "../styles/Navbar.css"

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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
              </div>
            </div>

            </nav>
        </div>
    )
}
export default NavBar