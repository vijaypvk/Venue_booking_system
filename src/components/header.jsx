import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../styles/header.css"
function Header()
{
    return(
        <header className="header shadow-sm">
                            <div className="logo">
                    <Link to="/">
                        <img src="src/assets/logo.svg" alt="Logo" />
                    </Link>
                </div>
            <nav className="nav-container ">

                <div className="search-container flex items-center w-full max-w-md bg-gray-100 rounded-full shadow-sm px-4 py-2" >
                    <FaSearch className="text-gray-400 mr-3" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent focus:outline-none text-gray-600 placeholder-gray-400 w-full"
                    />
                </div>
        </nav>
    </header>
    )
    
}

export default Header;