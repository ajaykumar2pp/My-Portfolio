import React from "react";
import { SiGmail } from "react-icons/si";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useFormik } from "formik";
import contactValidationSchema from "../validation/contactValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", mobile: "", message: "" },
    validationSchema: contactValidationSchema,
    onSubmit: (values,{ resetForm }) => {
      console.log("Form Submitted:", values);
      // Show success message
      toast.success("Message Sent Successfully!");

      // Reset the form fields
      resetForm();
    },
  });

  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      </div>
      <div className="flex justify-center items-center bg-gray-800 min-h-screen">
        <div className="w-full max-w-7xl px-6">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Box */}
            <div className="w-full md:w-auto bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-white">
                Contact Information
              </h2>
              <ul className="text-gray-300 font-medium space-y-4">
                {/* Email */}
                <li
                  key="email"
                  className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors duration-200">
                    <SiGmail />
                  </div>
                  <div className="text-center md:text-left ml-4">
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">
                      ajay2kumarpp@gmail.com
                    </p>
                  </div>
                </li>
                {/* Phone */}
                <li
                  key="phone"
                  className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors duration-200">
                    <FaPhone />
                  </div>
                  <div className="text-center md:text-left ml-4">
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">
                      +91-8191041371
                    </p>
                  </div>
                </li>
                {/* Location */}
                <li
                  key="location"
                  className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors duration-200">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="text-center md:text-left ml-4">
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">
                      Haridwar, Uttarakhand
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                Quick Contact
              </h2>
              <form onSubmit={formik.handleSubmit}>
                {/* Name Input */}
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="name"
                    maxLength="70"
                    className={`block w-full px-2.5 pb-2.5 pt-4 text-sm text-white bg-transparent rounded-lg border-2 
                        ${
                          formik.touched.name && formik.errors.name
                            ? "border-red-500"
                            : formik.touched.name && !formik.errors.name
                            ? "border-green-500"
                            : "border-gray-600"
                        } 
                        focus:outline-none focus:ring-0 focus:border-white peer`}
                    placeholder="Your Name"
                    {...formik.getFieldProps("name")}
                    onChange={(e) => {
                      let value = e.target.value
                        .replace(/[^A-Za-z ]/g, "")
                        .replace(/\s+/g, " ");

                      // Capitalize the first letter of each word
                      value = value.replace(/\b\w/g, (char) =>
                        char.toUpperCase()
                      );
                      formik.setFieldValue("name", value);
                    }}
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Name
                  </label>

                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-xs mt-1 animate-pulse">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                {/* Email Input */}
                <div className="relative mb-4">
                  <input
                    type="email"
                    id="email"
                    className={`block w-full px-2.5 pb-2.5 pt-4 text-sm text-white bg-transparent rounded-lg border-2 
                      ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : formik.touched.email && !formik.errors.email
                          ? "border-green-500"
                          : "border-gray-600"
                      } 
                      focus:outline-none focus:ring-0 focus:border-white peer`}
                    placeholder="Email Address"
                    {...formik.getFieldProps("email")}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Email Address
                  </label>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs mt-1 animate-pulse">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                {/* Mobile Number Input */}
                <div className="relative mb-4">
                  <input
                    type="tel"
                    id="mobile"
                    maxLength="10"
                    className={`block w-full px-2.5 pb-2.5 pt-4 text-sm text-white bg-transparent rounded-lg border-2 
                      ${
                        formik.touched.mobile && formik.errors.mobile
                          ? "border-red-500"
                          : formik.touched.mobile && !formik.errors.mobile
                          ? "border-green-500"
                          : "border-gray-600"
                      } 
                      focus:outline-none focus:ring-0 focus:border-white peer`}
                    placeholder="Your Mobile Number"
                    {...formik.getFieldProps("mobile")}
                    onChange={(e) => {
                      let value = e.target.value.replace(/[^\d]/g, "");
                      formik.setFieldValue("mobile", value);
                    }}
                  />
                  <label
                    htmlFor="mobile"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Mobile Number
                  </label>
                  {formik.touched.mobile && formik.errors.mobile && (
                    <p className="text-red-500 text-xs mt-1 animate-pulse">
                      {formik.errors.mobile}
                    </p>
                  )}
                </div>
                {/* Message Input */}
                <div className="relative mb-4">
                  <textarea
                    type="text"
                    id="message"
                    className={`block w-full min-h-32 max-h-64  px-2.5 pb-2.5 pt-4 text-sm text-white bg-transparent rounded-lg border-2 resize-y overflow-y-auto
                      ${
                        formik.touched.message && formik.errors.message
                          ? "border-red-500"
                          : formik.touched.message && !formik.errors.message
                          ? "border-green-500"
                          : "border-gray-600"
                      } 
                      focus:outline-none focus:ring-0 focus:border-white peer`}
                    placeholder="Your Message"
                    {...formik.getFieldProps("message")}
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Message
                  </label>
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-xs mt-1 animate-pulse">
                      {formik.errors.message}
                    </p>
                  )}
                </div>
                {/* Send Message Button */}
                <button
                  type="submit"
                  className="w-full border-blue-200 bg-blue-500 hover:border-transparent hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
