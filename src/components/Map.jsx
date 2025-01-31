import React from 'react';


const Map = () => {
  return (
    <div className=" bg-gray-100">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109530.24682673265!2d78.16074747461865!3d29.94571171158111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3902f292a9445d37%3A0x404ff5c5dcdba1d0!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1674169470162!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  )
}

export default Map