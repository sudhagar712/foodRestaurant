import { X } from "lucide-react";
import React, { useState } from "react";

function ContactForm() {
  //Set to open form
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="font-normal flex items-center justify-center">
      <button
        onClick={handleOpen}
        className=" bg-navBg-light dark:bg-navBg-dark text-black dark:text-white text-base rounded-md p-2 font-semibold cursor-pointer hover:text-green-800 hover:bg-gray-200 shadow-lg"
      >
        Send message
      </button>
      {/* form */}
      {open && (
        <div
          onClick={handleOpen}
          className=" fixed inset-0 z-50 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" w-96 bg-white dark:bg-bgTried-dark p-2 rounded-xl"
          >
            {/* close btn */}
            <button
              onClick={handleOpen}
              className=" flex float-end text-gray-600 dark:text-white mr-5 mt-2"
            >
              <X />
            </button>
            {/* form contact */}
            <div className=" w-full p-5">
              <h2 className=" text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                Write your message
              </h2>
              <form action="" className=" space-y-2">
                <div>
                  <label
                    htmlFor="username"
                    className=" flex text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className=" mt-1 w-full px-4 py-2 rounded-lg border-[1px] focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  />

                  <label
                    htmlFor="email"
                    className=" flex text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className=" mt-1 w-full px-4 py-2 rounded-lg border-[1px] focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  />
                  <label
                    htmlFor="message"
                    className=" flex text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    className=" mt-1 w-full px-4 py-2 rounded-lg border-[1px] focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-x-5 flex justify-end">
                  <button
                    onClick={handleOpen}
                    className=" px-4 py-2 text-sm text-red-600 border border-red-600 rounded-lg  hover:bg-red-100 dark:bg-red-800 dark:border-red-500 dark:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleOpen}
                    className=" px-4 py-2 text-sm text-green-600 border border-green-600 rounded-lg  hover:bg-green-100 dark:bg-green-800 dark:border-green-500 dark:text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
