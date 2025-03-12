import React from "react";
import contact_panda from "../../assets/images/contact-panda.jpg";

const Contact = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-4xl lg:text-5xl mt-8 font-bold leading-tight">
          Let's talk about everything!
        </h1>
        <p className="py-7">I'm looking forward to hearing from you</p>{" "}
        {/* <p>Please send me a message!</p> */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 pb-14 mx-auto text-gray-900 rounded-lg">
          <div className="flex flex-col justify-center">
            <div>
              <div className="text-gray-800 mt-4">
                Do u hate forms? Send me an &nbsp;
                <a
                  className="underline uppercase font-bold"
                  href="mailto:someone@gmail.com"
                >
                  email
                </a>
                &#32;:
              </div>
            </div>
            <div className="mt-12 text-center">
              <img
                className="h-auto w-full max-w-lg rounded-lg"
                src={contact_panda}
                alt="Contact"
              />
            </div>
          </div>
          <form>
            <div>
              <span className="uppercase text-sm text-gray-800 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-900"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-800 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-900"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-800 font-bold">
                Phone Number
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-900"
                type="phone"
                placeholder="Enter your Phone Number including country code"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-800 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-900"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className=" uppercase mt-5 w-full tracking-wide text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
