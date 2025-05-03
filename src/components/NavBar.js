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

            </nav>
        </div>
    )
}
export default NavBar