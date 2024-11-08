import React from 'react';
import { FaTimes, FaRegCalendarAlt } from 'react-icons/fa';

const BookingApproval = ({ booking, closeModal }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white w-full max-w-lg mx-4 rounded-2xl shadow-2xl p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center space-x-3">
            <FaRegCalendarAlt className="text-blue-600 text-3xl" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">{booking.staff}</h2>
              <p className="text-sm text-gray-500">Department of Information Technology</p>
            </div>
          </div>
          <button onClick={closeModal} className="text-gray-500 hover:text-red-500 transition duration-200">
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Venue Information Section */}
        <div className="mt-6 space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-semibold">Venue Name:</label>
            <input
              type="text"
              value={booking.name}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold">Venue Capacity:</label>
              <input
                type="text"
                value="250 people"
                readOnly
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold">Booked Capacity:</label>
              <input
                type="text"
                value="200 people"
                readOnly
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold">Location:</label>
            <input
              type="text"
              value="Basement of Sunflower block"
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold">From:</label>
              <input
                type="text"
                value="22-3-2024 9 AM"
                readOnly
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold">To:</label>
              <input
                type="text"
                value="22-3-2024 12 PM"
                readOnly
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold">Booked Description:</label>
            <textarea
              value="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product..."
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Reject
          </button>
          <button
            onClick={closeModal}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingApproval;
