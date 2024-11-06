import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";
import "../styles/header.css";

function Header() {
    return (
        <header className="header sticky top-0 shadow-md py-2 px-4 bg-white z-10">
            <nav className="flex items-center justify-between">
                
                <div className="logo">
                    <Link to="/">
                        <img src="src/assets/logo.svg" alt="Logo" />
                    </Link>
                </div>

                <div className="flex items-center w-full max-w-md mx-auto bg-gray-100 rounded-full shadow-sm px-2 py-1">
                    <FaSearch className="text-gray-400 mr-3" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 w-full border-none"
                    />
                </div>
                <div>
                    <FaBell className="text-blue-700 mr-2 size-5 border-9 rounded-sm hover:ring-2 ring-gray-500" />
                </div>
            </nav>
        </header>
    );
}

export default Header;
