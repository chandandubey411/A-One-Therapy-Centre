import { brandDetails } from "../config";

export default function Contact() {
  return (
    <section className="bg-dark-900 min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT : CONTACT DETAILS */}
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-4">
            Contact Us
          </h1>

          <p className="text-gray-300 mb-8">
            Get in touch with {brandDetails.name} for appointments, queries, or
            personalized spa experiences.
          </p>

          <div className="space-y-5 text-gray-200">
            <div>
              <p className="font-semibold text-primary-500">Business Name</p>
              <p>{brandDetails.name}</p>
            </div>

            <div>
              <p className="font-semibold text-primary-500">Phone</p>
              <a
                href={`tel:${brandDetails.phone}`}
                className="text-white hover:text-primary-500 transition"
              >
                {brandDetails.phone}
              </a>
            </div>

            <div>
              <p className="font-semibold text-primary-500">Email</p>
              <a
                href={`mailto:${brandDetails.email}`}
                className="text-white hover:text-primary-500 transition"
              >
                {brandDetails.email}
              </a>
            </div>

            <div>
              <p className="font-semibold text-primary-500">Address</p>
              <p className="whitespace-pre-line">
                {brandDetails.address}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT : CONTACT FORM */}
        <div className="bg-dark-800 rounded-xl shadow-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">
            Send Us a Message
          </h2>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="91272ddf-93ae-4969-8290-1f599564ccf2"
            />

            <input
              type="hidden"
              name="subject"
              value={`New Contact Form Submission - ${brandDetails.name}`}
            />

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-dark-900 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full bg-dark-900 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-500"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-dark-900 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-dark-900 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-500"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
