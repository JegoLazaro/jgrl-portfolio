import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import "./forms.css";

import emailjs from '@emailjs/browser';

const Forms = () => {
  const [agreed, setAgreed] = useState(false);
  const [hoverDownload, setHoverDownload] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9v91ywq', 'template_zix1wsq', form.current, 'zefYFrTnbQ92biUlo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className="isolate bg-white px-6 py-24 lg:py-32 -mb-10 sm:-mb-10 sm:py-2 sm:pb-20 lg:px-8">
      <form
        // action="#"
        // method="POST"
        ref={form}
        onSubmit={sendEmail}
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {/* <div className="error-text text-red-500 font-semibold">
                Please Enter your First Name *
              </div> */}
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {/* <div className="error-text text-red-500 font-semibold">
                Please Enter your Last Name *
              </div> */}
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {/* <div className="error-text text-red-500 font-semibold">
                Please Enter your Email Address *
              </div> */}
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {/* <div className="error-text text-red-500 font-semibold">
                Please Enter the Subject of your message *
              </div> */}
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              {/* <div className="error-text text-red-500 font-semibold">
                Please Enter your Message *
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            onMouseEnter={() => setHoverDownload(true)}
            onMouseLeave={() => setHoverDownload(false)}
            style={{
              backgroundColor: hoverDownload ? "#4E93B0" : "#0071A1",
              color: !hoverDownload ? "#fff" : "#fff",
            }}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms