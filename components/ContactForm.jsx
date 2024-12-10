import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";
import { joinVpp } from "@/services/PublicService";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    village: Yup.string().required("Village is required"),
    contact: Yup.string()
      .matches(/^[0-9]{10}$/, "Contact Number must be exactly 10 digits")
      .required("Contact is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      constituency: "",
      village: "",
      contact: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await joinVpp(values);
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
      {isSubmitted && <Alert onClose={() => setIsSubmitted(false)} />} {/* Conditionally render Alert */}
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* First Name Field */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.firstName && formik.touched.firstName
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-first-name"
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

          {/* Last Name Field */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.lastName && formik.touched.lastName
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="grid-last-name"
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

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Constituency Field */}
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-constituency"
            >
              Constituency
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.constituency && formik.touched.constituency
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-constituency"
              type="text"
              name="constituency"
              value={formik.values.constituency}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Village Field */}
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-village"
            >
              Village
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.village && formik.touched.village
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-village"
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

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Contact Field */}
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-contact"
            >
              Contact
            </label>
            <input
              className={`appearance-none block w-full bg-white text-gray-700 border ${
                formik.errors.contact && formik.touched.contact
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-contact"
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

        <button
          type="submit"
          className="bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 px-4 border-b-4 border-violet-600 hover:border-violet-600 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
