import React from "react";
import contact_panda from "../../assets/images/contact-panda.jpg";

const Contact = () => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl text-slate-700 mb-6">Contact me</h1>
      <p>I'm looking forward to hearing from you</p>
      <p>Please send me a message!</p>

      <div>
        <div class="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto text-gray-900 rounded-lg">
          <div class="flex flex-col justify-center">
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
                Let's talk about everything!
              </h2>
              <div class="text-gray-700 mt-8">
                Do u hate forms? Send me an &nbsp;
                <a class="underline" href="mailto:someone@gmail.com">
                  email
                </a>
                &#32;:
              </div>
            </div>
            <div class="mt-12 text-center">
              <img
                className="h-auto w-full max-w-lg rounded-lg"
                src={contact_panda}
                alt="Contact"
              />
            </div>
          </div>
          <form>
            <div>
              <span class="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-900"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-900"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Phone Number
              </span>
              <input
                class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-900"
                type="phone"
                placeholder="Enter your Phone Number including country code"
                required
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                class="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-900"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div class="mt-8">
              <button
                type="submit"
                class=" uppercase mt-5 w-full tracking-wide text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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
