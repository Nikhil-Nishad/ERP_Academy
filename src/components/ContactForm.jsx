import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xbllbyrw");

  if (state.succeeded) {
    return (
      <section className="bg-green-800 text-white flex items-center justify-center py-8">
        <p className="text-xl font-semibold text-center">
          Thank you for reaching out! We will get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="bg-green-800 text-white flex items-center justify-center py-6 px-4 md:py-10 md:px-6"
    >
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 text-center mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-green-800 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-800 font-semibold"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-800 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-800 font-semibold"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-green-800 mb-2"
            >
              Phone Number
            </label>
            <input
              required
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-800 font-semibold"
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-green-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              placeholder="Enter your message"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-green-800"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 px-6 bg-green-800 text-white font-semibold rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
