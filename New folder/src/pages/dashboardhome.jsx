import "../styles/dashboardhome.css";
import React from "react";
import Sidebar from "../components/sidebar";
import { FaUser, FaMapMarkerAlt, FaClipboardCheck, FaTimesCircle } from "react-icons/fa";
import Usage from '../components/usage';
import Table from "../components/table";
import { Link } from "react-router-dom";

function Dashboardhome() {
    const cardData = [
        { title: "Total Staffs", value: "2582", icon: <FaUser className="text-purple-500" /> },
        { title: "Total Venues", value: "920", icon: <FaMapMarkerAlt className="text-yellow-400" /> },
        { title: "Booked Venues", value: "823", icon: <FaClipboardCheck className="text-green-500" /> },
        { title: "Unreserved Venues", value: "97", icon: <FaTimesCircle className="text-red-500" /> },
    ];

    return (
        <div className="dashboard flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex flex-col p-6 w-full lg:w-4/5">
                <h2 className="text-3xl font-bold text-gray-700 mb-8">Dashboard</h2>

                {/* Card Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {cardData.map((card, index) => (
                        <div key={index} className="card bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl p-4 flex items-center">
                            <div className="icon-container p-4 bg-gray-200 rounded-xl text-3xl text-center mr-4 transition-transform transform hover:scale-110">
                                {card.icon}
                            </div>
                            <div className="text-container">
                                <h3 className="text-sm font-semibold text-gray-700">{card.title}</h3>
                                <p className="text-xl font-bold text-gray-900">{card.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Usage Details Section */}
                <div>
                    <Link to={"/analytics"}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition-colors">Usage details</h3>
                        <Usage />
                    </Link>
                </div>

                {/* Table Section */}
                <div className="py-8">
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Dashboardhome;
