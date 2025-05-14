import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "./Alert"; // Assuming you have an Alert component
import axios from "axios";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    constituency: Yup.string().required("Constituency is required"),
    village: Yup.string().required("Village is required"),
    contact: Yup.string()
      .matches(/^[0-9]{10}$/, "Contact Number must be exactly 10 digits")
      .required("Contact is required"),
    rate: Yup.string(), // Remove the required validation
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      constituency: "",
      village: "",
      contact: "",
      rate: "", // Include rate in initial values
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post("/api/contact", values); // Send data to API
        console.log(response.data);
        setIsSubmitted(true); // Show success alert
        resetForm(); // Reset the form fields
      } catch (error) {
        console.error("Error sending data to backend:", error);
      }
      setSubmitting(false);
    },
  });

  return (
    <div>
      <form className="w-full relative" onSubmit={formik.handleSubmit}>
        {/* First Name */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.firstName && formik.touched.firstName
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="firstName"
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.lastName && formik.touched.lastName
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
              id="lastName"
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Constituency */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="constituency"
            >
              Constituency
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.constituency && formik.touched.constituency
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="constituency"
              type="text"
              name="constituency"
              value={formik.values.constituency}
              onChange={formik.handleChange}
            />
            {formik.touched.constituency && formik.errors.constituency && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.constituency}
              </p>
            )}
          </div>
        </div>

        {/* Village */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="village"
            >
              Village
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.village && formik.touched.village
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="village"
              type="text"
              name="village"
              value={formik.values.village}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.village && formik.errors.village && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.village}
              </p>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="contact"
            >
              Contact
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.contact && formik.touched.contact
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="contact"
              type="text"
              name="contact"
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.contact && formik.errors.contact && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.contact}
              </p>
            )}
          </div>
        </div>

        {/* Membership Type (Rate) */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="rate"
            >
              Membership Type :
            </label>
            <div className="relative">
              <select
                className={`block appearance-none w-full bg-white border ${
                  formik.errors.rate && formik.touched.rate
                    ? "border-red-500"
                    : "border-gray-200"
                } text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="rate"
                name="rate"
                value={formik.values.rate || "default"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="default" disabled>
                  Select Type
                </option>
                <option value="50">Primary Member - 50 Rs</option>
                <option value="150">Active Member - 150 Rs</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
            {formik.touched.rate && formik.errors.rate && (
              <p className="text-red-500 text-xs italic">{formik.errors.rate}</p>
            )}
          </div>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col justify-center items-center ">
          <h2
            style={{
              color: '#092e9c',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            className="text-center"
          >
            Please Scan QR for Payment
          </h2>
          <img
            src="/images/QRdummy.jpeg" // Replace with the path to your image
            alt="Description of image"
            style={{ width: '140px', height: '140px' }}
            className="object-contain rounded-lg mt-0"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 px-4 border-b-4 border-violet-600 hover:border-violet-600 rounded mt-2"
        >
          Submit
        </button>
      </form>

      {/* Success Alert */}
      {isSubmitted && (
        <div className="relative top-30 left-1/2 transform -translate-x-1/2">
          <Alert onClose={() => setIsSubmitted(false)} />
        </div>
      )}
    </div>
  );
};

export default ContactForm;
