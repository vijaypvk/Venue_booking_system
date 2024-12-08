
import { FaTimes, FaRegCalendarAlt } from 'react-icons/fa';

const BookingApproval = ({ booking, closeModal }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white w-full max-w-sm mx-4 rounded-3xl shadow-xl p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <div className="flex items-center space-x-3">
            <FaRegCalendarAlt className="text-blue-600 text-2xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{booking.staff}</h2>
              <p className="text-xs text-gray-500">Booking Details</p>
            </div>
          </div>
          <button onClick={closeModal} className="text-gray-500 hover:text-red-500 transition duration-200">
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Venue Information Section */}
        <div className="space-y-4">
          {/* Venue Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Venue Name:</label>
            <input
              type="text"
              value={booking.name}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Capacity and Staff Information */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Venue Capacity:</label>
              <input
                type="text"
                value={`${booking.capacity} people`}
                readOnly
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Staff:</label>
              <input
                type="text"
                value={booking.staff}
                readOnly
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Location:</label>
            <input
              type="text"
              value={booking.location}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Date, From Time, To Time */}
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">Date:</label>
              <input
                type="text"
                value={booking.date_time}
                readOnly
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">From Time:</label>
              <input
                type="text"
                value={booking.from_time}
                readOnly
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">To Time:</label>
              <input
                type="text"
                value={booking.to_time}
                readOnly
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              value={booking.description || 'No description provided'}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
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
