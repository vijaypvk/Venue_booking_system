import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaSearch } from "react-icons/fa";
import BookingApproval from "../components/approval";

function Bookingconformation() {
  const products = [
    { name: "SF seminar-hall 1", location: "Sunflower-block", date_time: "10-10-2024", from_time: "10:00 AM", to_time: "12:00 PM", capacity: "300", staff: "Arvindh", description: "i am here to book for a event i need this venue...." },
    { name: "SF seminar-hall 2", location: "Sunflower-block", date_time: "12-10-2024", from_time: "02:00 PM", to_time: "04:00 PM", capacity: "200", staff: "Vijay", description: "i am here to book for a event i need this venue...." },
    { name: "SF seminar-hall 3", location: "Daisy-block", date_time: "15-10-2024", from_time: "09:30 AM", to_time: "11:30 AM", capacity: "150", staff: "Kumar", description: "i am here to book for a event i need this venue...." },
    { name: "DF conference-room", location: "Daffodil-block", date_time: "18-10-2024", from_time: "11:15 AM", to_time: "01:15 PM", capacity: "100", staff: "Sneha", description: "i am here to book for a event i need this venue...." },
    { name: "RW auditorium", location: "Rosewood-block", date_time: "20-10-2024", from_time: "04:00 PM", to_time: "06:00 PM", capacity: "500", staff: "Mohan", description: "i am here to book for a event i need this venue...." },
    { name: "LF meeting-room", location: "Lily-block", date_time: "22-10-2024", from_time: "03:30 PM", to_time: "05:30 PM", capacity: "50", staff: "Rita", description: "i am here to book for a event i need this venue...." },
    { name: "TW seminar-hall A", location: "Tulip-block", date_time: "25-10-2024", from_time: "08:45 AM", to_time: "10:45 AM", capacity: "120", staff: "Suresh", description: "i am here to book for a event i need this venue...." },
    { name: "AZ open-space", location: "Azalea-block", date_time: "27-10-2024", from_time: "01:00 PM", to_time: "03:00 PM", capacity: "400", staff: "Preeti", description: "i am here to book for a event i need this venue...." },
    { name: "MG training-room", location: "Magnolia-block", date_time: "30-10-2024", from_time: "09:00 AM", to_time: "11:00 AM", capacity: "80", staff: "Rahul", description: "i am here to book for a event i need this venue...." },
  ];

  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.date_time.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.staff.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              value={searchQuery}
              onChange={handleSearchChange}
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
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">From Time</th>
                <th scope="col" className="px-6 py-3">To Time</th>
                <th scope="col" className="px-6 py-3">Capacity</th>
                <th scope="col" className="px-6 py-3">Staff</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr
                    key={product.date_time} // use a unique key like name or date_time
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleRowClick(product)}
                  >
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.name}
                    </th>
                    <td className="px-6 py-4">{product.location}</td>
                    <td className="px-6 py-4">{product.date_time}</td>
                    <td className="px-6 py-4">{product.from_time}</td>
                    <td className="px-6 py-4">{product.to_time}</td>
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
                  <td colSpan="8" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
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
          <BookingApproval booking={selectedBooking} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Bookingconformation;
