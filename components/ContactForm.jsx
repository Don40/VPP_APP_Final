import React, { useState } from "react";
import {  useFormik } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";
import { connectMe } from "@/services/PublicService";

const ContactForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false); 
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    // email: Yup.string().email("Invalid email").required("Email is required"),
    // constituency: Yup.string().required("Constituency is required"),
    village: Yup.string().required("Village is required"),
    // subject: Yup.string().required("Subject is required"),
    // message: Yup.string().required("Message is required"),
    contact: Yup.string().matches(/^[0-9]{10}$/, "Contact Number must be exactly 10 digits"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      constituency: "",
      village: "",
      // message: "",
      contact: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting,resetForm }) => {
      try {
        const response = await connectMe(values);
        console.log(response.data);
        setIsSubmitted(true);
        resetForm()
      } catch (error) {
        console.error("Error sending data to backend:", error);
      }
      setSubmitting(false);
    },
  });

  return (
     <div>
      {isSubmitted && <Alert />} {/* Conditionally render Alert component */}
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
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
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-constituency"
          >
            CONSTITUENCY
          </label>
          <input
            className={`appearance-none block w-full bg-white text-gray-700 border ${
              formik.errors.constituency && formik.touched.constituency
                ? "border-red-500"
                : "border-gray-200"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id="grid-constituency"
            type="text"
            name="constituency"
            value={formik.values.email}
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
          />
          {/* {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs italic">
              {formik.errors.email}
            </p>
          )} */}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-village"
          >
            VILLAGE
          </label>
          <input
            className={`appearance-none block w-full bg-white text-gray-700 border ${
              formik.errors.village && formik.touched.village
                ? "border-red-500"
                : "border-gray-200"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-contact"
          >
            CONTACT
          </label>
          <input
            className={`appearance-none block w-full bg-white text-gray-700 border ${
              formik.errors.contact && formik.touched.contact
                ? "border-red-500"
                : "border-gray-200"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
     
      {/* <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-message"
          >
            Message
          </label>
          <textarea
            className={`resize-y rounded-md appearance-none block w-full bg-white text-gray-700 border ${
              formik.errors.message && formik.touched.message
                ? "border-red-500"
                : "border-gray-200"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id="grid-message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="text-red-500 text-xs italic">
              {formik.errors.message}
            </p>
          ):(<p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you&apos;d like
          </p>)}
        </div>
      </div> */}
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
