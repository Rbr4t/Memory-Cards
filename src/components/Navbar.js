import logo from '../assets/github-mark.png'

import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <h1>MEMORY CARDS!</h1>
            <a href="https://github.com/Rbr4t/Memory-Cards" target='_blank'><img src={logo} alt='github link' height={50} ></img></a>
        </nav>
    )
}

export default Navbar;
