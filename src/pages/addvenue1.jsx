import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaCamera } from "react-icons/fa";
import Addvenue2 from "./addvenue2";
import { Link } from "react-router-dom";
function AddVenue1() {
  // State to handle the uploaded photo
  const [photo, setPhoto] = useState(null);

  // Function to handle file upload
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="dashboard flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex flex-col p-8 w-full lg:w-4/5">
        <h2 className="text-4xl font-bold text-gray-700 mb-8">Add Venue</h2>

        {/* Card Container */}
        <div className="p-10 bg-white border border-gray-200 rounded-3xl shadow-2xl">
          {/* Upload Photo Section */}
          <div className="flex flex-col items-center mb-10">
            {/* Display the uploaded photo if available */}
            {photo ? (
              <img
                src={photo}
                alt="Uploaded"
                className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-blue-300 mb-6"
              />
            ) : (
              <button className="bg-blue-100 rounded-full p-8 mb-6 hover:bg-blue-200 transition-all duration-300">
                <FaCamera className="text-blue-600 text-4xl" />
              </button>
            )}
            {/* Upload Photo Button */}
            <label className="text-blue-600 font-semibold cursor-pointer hover:text-blue-500 transition-colors duration-200">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter venue name"
                className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100 focus:bg-white focus:border-blue-400 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Type</label>
              <select className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100 focus:bg-white focus:border-blue-400 transition-all duration-200">
                <option>--</option>
                <option>Seminar Hall</option>
                <option>Conference Room</option>
                <option>Auditorium</option>
              </select>
            </div>

            {/* Right Column */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Location</label>
              <select className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100 focus:bg-white focus:border-blue-400 transition-all duration-200">
                <option>--</option>
                <option>Sunflower Block</option>
                <option>Daisy Block</option>
                <option>Rosewood Block</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Capacity</label>
              <input
                type="number"
                placeholder="Enter capacity"
                className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100 focus:bg-white focus:border-blue-400 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Projector</label>
              <select className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100 focus:bg-white focus:border-blue-400 transition-all duration-200">
                <option>--</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">AC</label>
              <select className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100 focus:bg-white focus:border-blue-400 transition-all duration-200">
                <option>--</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">MIC and Speaker</label>
              <select className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100 focus:bg-white focus:border-blue-400 transition-all duration-200">
                <option>--</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-10 space-x-4">
            <Link to={"/venue"}>
            <button className="bg-gray-300 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-400 transition-all duration-200">
              Back
            </button>
            </Link>
            <Link to={"/addvenue2"}>
            <button  className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 shadow-lg transition-all duration-200">
              Next
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVenue1;
