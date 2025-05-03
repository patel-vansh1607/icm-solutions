import "../styles/Navbar.css"

const NavBar = () => {
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

                </div>
              </div>
            </div>

            </nav>
        </div>
    )
}
export default NavBar