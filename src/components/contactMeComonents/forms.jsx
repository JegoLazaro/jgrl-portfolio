import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const Forms = () => {
  const [state, handleSubmit] = useForm("xdkqvnre"); 
  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully. I'll be in touch soon!",
        icon: "success",
        confirmButtonText: "Awesome",
        confirmButtonColor: "#156d90" 
      }).then(() => {
        window.location.reload()
      });
    }
  }, [state.succeeded]);

  return (
    <div className="isolate bg-white px-6 py-24 lg:py-32 md:py-14 -mb-10 sm:-mb-10 sm:py-0 sm:pb-20 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto -mt-16 lg:-mt-28 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="First Name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="FirstName"
                field="first-name"
                errors={state.errors}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Last Name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="LastName"
                field="last-name"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email Address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Subject
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                placeholder="What do you want to talk about?"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                required
                name="message"
                id="message"
                rows={4}
                placeholder="Write me a message..."
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={state.submitting}
            className="block w-full rounded-md bg-cyan-700 hover:bg-cyan-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm "
          >
            {state.submitting ? "Sending..." : "Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
