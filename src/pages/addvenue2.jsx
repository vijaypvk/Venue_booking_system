import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Banner from "../assets/s1.jpg"
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

function Addvenue2({ formData = {}, onEdit, onConfirm }) {
  // Initialize local state with default values if formData is empty
  const [localFormData] = useState({
    name: formData.name || "Grand Conference Hall",
    type: formData.type || "Conference Room",
    location: formData.location || "Sunflower Block",
    capacity: formData.capacity || 100,
    projector: formData.projector || "Yes",
    ac: formData.ac || "Yes",
    micAndSpeaker: formData.micAndSpeaker || "Yes",
    photo: formData.photo || Banner,
  });

  return (
    <div className="dashboard flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex flex-col p-8 w-full lg:w-4/5">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">Add Venue</h2>

        {/* Confirmation Card */}
        <div className="p-10 bg-white border border-gray-200 rounded-3xl shadow-2xl">
          <div className="space-y-8">
            {/* Image Preview as Banner */}
            {localFormData.photo && (
              <div className="flex justify-center mb-8">
                <img
                  src={localFormData.photo}
                  alt="Uploaded"
                  className="w-full h-56 object-cover rounded-xl shadow-lg border-4 border-blue-300"
                />
              </div>
            )}

            {/* Venue Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-600 font-medium">Name:</h3>
                <p className="text-lg text-gray-800">{localFormData.name || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">Type:</h3>
                <p className="text-lg text-gray-800">{localFormData.type || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">Location:</h3>
                <p className="text-lg text-gray-800">{localFormData.location || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">Capacity:</h3>
                <p className="text-lg text-gray-800">{localFormData.capacity || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">Projector:</h3>
                <p className="text-lg text-gray-800">{localFormData.projector || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">AC:</h3>
                <p className="text-lg text-gray-800">{localFormData.ac || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">MIC and Speaker:</h3>
                <p className="text-lg text-gray-800">{localFormData.micAndSpeaker || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-10 space-x-4">
            <Link to={"/addvenue1"}>
              <button
                onClick={onEdit}
                className="bg-gray-300 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-400 transition-all duration-200"
              >
                Back
              </button>
            </Link>
            <Link to={"/venue"}>
              <button
                onClick={onConfirm}
                className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 shadow-lg transition-all duration-200"
              >
                Confirm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addvenue2;
