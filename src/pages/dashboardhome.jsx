import "../styles/dashboardhome.css";
import React from "react";
import Sidebar from "../components/sidebar";
import { FaSearch } from "react-icons/fa";

function Dashboardhome(){
    return(
        <div className="dashboard ">
            <Sidebar/>
        <header>
            <nav>
                <div className="flex items-center w-full max-w-md bg-gray-100 rounded-md shadow-sm px-4 py-2">
                    <FaSearch className="text-gray-400 mr-3"/>
                <input type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none text-gray-600 placeholder-gray-400 w-full" />
                </div>
            </nav>
        </header>
        </div>
    )
};
        
export default Dashboardhome;

