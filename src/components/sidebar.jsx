import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserFriends,FaMapMarkedAlt,FaBook,FaComments,FaHistory,FaMoon,FaPowerOff } from "react-icons/fa";

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");

    const menuitems =[
        { name: 'Dashboard', icon: <FaUserFriends/>},
        { name: 'Staff', icon: <FaUserFriends/>},
        { name: 'Venues', icon: <FaMapMarkedAlt/>},
        { name: 'Booking Confirmation', icon: <FaBook/>},
        { name: 'Queries', icon: <FaComments/>},
        { name: 'History', icon: <FaHistory/>},
    ];

    const handleSetActive = (name) =>{
        setActive(name);
    };

    return(
        <div className="w-64 h-screen bg-white shadow-2xl p-4 flex flex-col justify-between ">
            <div>
                <nav>
                    <ul className="space-y-2">
                        {menuitems.map((item) =>(
                            <li
                            key={item.name}
                            onClick={() => handleSetActive(item.name)}
                            className={`flex items-center space-x-3 p-4 rounded-lg cursor-pointer 
                            ${active === item.name ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} 
                            hover:bg-blue-600 hover:text-blue-50 transition duration-200`}
                            >
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                <ul className="space-y-2">
                    <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer text-gray-700 hover:bg-blue-600 hover:text-blue-50 transition duration-200 ">
                        <FaMoon/>
                        <span className="font-medium">Dark Mode</span>
                    </li>
                    <Link to="/login">
                    <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer text-gray-700 hover:bg-blue-600 hover:text-blue-50 transition duration-200 ">
                        <FaPowerOff/>
                        <span className="font-medium">Logout</span>
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;