import "./navbar.css";
const Navbar = () => {
    return (
        <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-sm fixed-top">
            <a href="" className="navbar-brand"><span>Y</span>oga</a>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="" 
                    className="nav-link active">Home</a></li>
                    <li className="nav-item"><a href="" 
                    className="nav-link">About</a></li>
                    <li className="nav-item"><a href="" 
                    className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="" 
                    className="nav-link">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;