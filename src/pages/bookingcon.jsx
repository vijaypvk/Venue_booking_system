import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaSearch } from "react-icons/fa";
import BookingApproval from "../components/approval";

function Bookingconformation() {
 
  const products = [
    { name: "SF seminar-hall 1", location: "Sunflower-block", date_time: "10-10-2024", capacity: "300", staff: "Arvindh" },
    { name: "SF seminar-hall 2", location: "Sunflower-block", date_time: "12-10-2024", capacity: "200", staff: "Vijay" },
    { name: "SF seminar-hall 3", location: "Daisy-block", date_time: "15-10-2024", capacity: "150", staff: "Kumar" },
    { name: "DF conference-room", location: "Daffodil-block", date_time: "18-10-2024", capacity: "100", staff: "Sneha" },
    { name: "RW auditorium", location: "Rosewood-block", date_time: "20-10-2024", capacity: "500", staff: "Mohan" },
    { name: "LF meeting-room", location: "Lily-block", date_time: "22-10-2024", capacity: "50", staff: "Rita" },
    { name: "TW seminar-hall A", location: "Tulip-block", date_time: "25-10-2024", capacity: "120", staff: "Suresh" },
    { name: "AZ open-space", location: "Azalea-block", date_time: "27-10-2024", capacity: "400", staff: "Preeti" },
    { name: "MG training-room", location: "Magnolia-block", date_time: "30-10-2024", capacity: "80", staff: "Rahul" },
    
  ];

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);


  const handleRowClick = (booking) => {
    if (booking) {
      setSelectedBooking(booking);
      setIsModalOpen(true);
    }
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className="dashboard flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col p-4 w-full lg:w-4/5">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Booking Confirmation</h2>

       
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

       
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Venue Name</th>
                <th scope="col" className="px-6 py-3">Location</th>
                <th scope="col" className="px-6 py-3">Date-Time</th>
                <th scope="col" className="px-6 py-3">Capacity</th>
                <th scope="col" className="px-6 py-3">Staff</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleRowClick(product)}
                  >
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.name}
                    </th>
                    <td className="px-6 py-4">{product.location}</td>
                    <td className="px-6 py-4">{product.date_time}</td>
                    <td className="px-6 py-4">{product.capacity}</td>
                    <td className="px-6 py-4">{product.staff}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center bg-yellow-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                        Awaiting..
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                    No bookings available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

     
      {isModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <BookingApproval booking={selectedBooking} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookingconformation;
