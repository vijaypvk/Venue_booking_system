import React from "react";
import Sidebar from "../components/sidebar";
import { FaSearch, FaPen, FaTrash,FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function Venue() {
    const products = [
        { id: "1", name: "SF seminar-hall 1", capacity: "300", location: "Sunflower-block", type: "seminar" },
        { id: "2", name: "Garden-view conference room", capacity: "100", location: "Rose-block", type: "conference" },
        { id: "3", name: "Oceanview hall", capacity: "200", location: "Palm-block", type: "workshop" },
        { id: "4", name: "Green-hills seminar room", capacity: "150", location: "Orchid-block", type: "seminar" },
        { id: "5", name: "Cityscape hall", capacity: "400", location: "Lily-block", type: "conference" }
    ];

    return (
        <div className="dashboard flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex flex-col p-4 w-full lg:w-4/5">
            <h2 className="text-3xl font-bold text-gray-700 mb-8">Add Venue</h2>
                <div className="flex justify-between items-center">
                <div className="flex justify-start p-4">
                <div className="flex items-center w-full max-w-md bg-white rounded-full shadow-sm px-10 py-1">
                    <FaSearch className="text-gray-400 mr-3 text-xl" />
                    <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 w-full border-none text-lg"
                    />
                </div>
                </div>
                <Link to={"/addvenue1"}>
                <button class=" flex items-center focus:outline-none text-white bg-[#27AE60] hover:bg-green-500 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add venue <span className="ml-2"><FaPlus/></span></button>
                </Link>
                </div>
                
                
                {/* Table */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-900 uppercase bg-[#fcfdfd] dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-all"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="checkbox-all" className="sr-only">Select all</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Capacity</th>
                                <th scope="col" className="px-6 py-3">Location</th>
                                <th scope="col" className="px-6 py-3">Type</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id={`checkbox-table-${index + 1}`}
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label htmlFor={`checkbox-table-${index + 1}`} className="sr-only">Select {product.name}</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {product.id}
                                        </th>
                                        <td className="px-6 py-4">{product.name}</td>
                                        <td className="px-6 py-4">{product.capacity}</td>
                                        <td className="px-6 py-4">{product.location}</td>
                                        <td className="px-6 py-4">{product.type}</td>
                                        <td className="px-6 py-4 flex space-x-6">
                                            <button className="text-gray-600 hover:text-gray-800">
                                                <FaPen />
                                            </button>
                                            <button className="text-red-500 hover:text-red-700">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                                        No products available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Venue;
