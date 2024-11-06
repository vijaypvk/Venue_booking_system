import "../styles/dashboardhome.css";
import React from "react";
import Sidebar from "../components/sidebar";
import { FaUser, FaMapMarkerAlt, FaClipboardCheck, FaTimesCircle } from "react-icons/fa";
import LineChartComponent from '../components/usage';
import Table from "../components/table";

function Dashboardhome() {
    const cardData = [
        { title: "Total Staffs", value: "2582", icon: <FaUser className="text-purple-500" /> },
        { title: "Total Venues", value: "920", icon: <FaMapMarkerAlt className="text-yellow-500" /> },
        { title: "Booked Venues", value: "823", icon: <FaClipboardCheck className="text-green-500" /> },
        { title: "Unreserved Venues", value: "97", icon: <FaTimesCircle className="text-red-500" /> },
    ];

    return (
        <div className="dashboard flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex flex-col p-4 w-full lg:w-4/5">
                <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {cardData.map((card, index) => (
                        <div key={index} className="flex items-center p-6 bg-white shadow rounded-xl">
                            <div className="p-3 bg-gray-100 rounded-full text-2xl mr-4">
                                {card.icon}
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-500">{card.title}</h3>
                                <p className="text-2xl font-bold">{card.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

               <div>
                <h3 className="text-lg font-semibold mb-4">Usage details</h3>
                <LineChartComponent />
                </div>

                <div className="py-8 ">
                    <Table/>
                </div>
            </div>
        </div>
    );
}

export default Dashboardhome;
