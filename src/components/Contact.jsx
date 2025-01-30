import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-900 py-16 pt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500 tracking-wide reveal-up">
          CONTACT ME
        </h2>
        <p className="text-lg text-zinc-300 mt-4 max-w-2xl mx-auto reveal-up"></p>
        Feel free to reach out by filling out the form below. I’m always happy
        to collaborate or assist with your projects.
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="bg-zinc-800 w-full max-w-2xl p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-300 reveal-up">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center reveal-up">
              Get in Touch
            </h3>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="e3834359-1602-4b0d-8e1b-adb757dcdbe9" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-300 reveal-up"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 mt-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent reveal-up"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-300 reveal-up"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 mt-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent reveal-up"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-zinc-300 reveal-up"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full p-3 mt-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent reveal-up"
                  placeholder="Your Mobile Number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10 digit mobile number."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-300 reveal-up"
                >
                  Email
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 mt-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent reveal-up"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 reveal-up"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
