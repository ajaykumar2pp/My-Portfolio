import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = () => {
  return (
<div className="bg-white mt-12  text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex justify-center items-center gap-2 mb-6"><FaMapMarkerAlt className="text-green-600 text-4xl" /> Find Me on the Map</h2>
  <p className="text-lg font-mono font-semibold text-blue-600 mb-8">
    Reach out to me easily! Here's my location on the map.  
  </p>

  <div className="flex justify-center">
    <div className="relative w-full max-w-full h-0 pb-[60%] md:pb-[50%] lg:pb-[35%] shadow-lg  overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109530.24682673265!2d78.16074747461865!3d29.94571171158111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3902f292a9445d37%3A0x404ff5c5dcdba1d0!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1674169470162!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>
  );
};

export default Map;
