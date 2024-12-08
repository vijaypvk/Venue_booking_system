import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaSearch } from "react-icons/fa";

function History() {
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
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Filtering the products based on search query
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.date_time.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.staff.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
        <h2 className="text-3xl font-bold text-gray-700 mb-8">History</h2>
        
        <div className="flex justify-start p-4">
          <div className="flex items-center w-full max-w-md bg-white rounded-full shadow-sm px-10 py-1">
            <FaSearch className="text-gray-400 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 w-full border-none text-lg"
              value={searchQuery} // bind searchQuery to the input value
              onChange={(e) => setSearchQuery(e.target.value)} // update searchQuery on change
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
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
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
                      <span className="inline-flex items-center bg-red-400 text-gray-900 text-xs font-medium px-2 py-1 rounded">
                        Rejected..
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
    </div>
  );
}

export default History;



// import React from "react";
// import Typed from "react-typed";

// const TypedTitle = () => {
//   return (
//     <h1 className="text-3xl font-bold text-center mt-8">
//       We construct your dream{" "}
//       <Typed
//         strings={["house", "office", "hospital"]}
//         typeSpeed={50} // Speed of typing
//         backSpeed={30} // Speed of deleting
//         loop // Repeat the animation
//       />
//     </h1>
//   );
// };

// export default TypedTitle;
