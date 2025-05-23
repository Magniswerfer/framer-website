import { Head } from "$fresh/runtime.ts";

export default function Contact() {
  return (
    <div class="bg-white min-h-screen p-1">
      <Head>
        <title>Contact - Framer App</title>
        <meta
          name="description"
          content="Contact the Framer team for support, partnerships, or any questions about our app."
        />
      </Head>

      {/* Header Section */}
      <div class="bg-blue-600 rounded-lg p-6 text-white mb-1">
        <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
          CONTACT
        </h1>
        <p class="text-lg text-white/90 max-w-3xl">
          Get in touch with our team for support, partnerships, or any
          questions.
        </p>
      </div>

      {/* Contact Form Grid */}
      <div class="grid grid-cols-12 gap-1">
        <div class="col-span-12 md:col-span-8 bg-white border border-black rounded-lg p-6">
          <h2 class="text-2xl font-bold uppercase mb-6">GET IN TOUCH</h2>

          <div class="grid grid-cols-1 gap-4">
            <div>
              <label
                class="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                class="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label
                class="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                class="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                class="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <select
                id="subject"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
                <option>Feedback</option>
              </select>
            </div>

            <div>
              <label
                class="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                class="w-full border border-gray-300 rounded-lg px-4 py-3"
                rows={6}
                placeholder="Your message here..."
              >
              </textarea>
            </div>

            <div>
              <button
                type="submit"
                class="bg-blue-600 text-white font-bold uppercase tracking-wide px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                SUBMIT MESSAGE
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-4 grid grid-rows-2 gap-1">
          <div class="bg-yellow-300 rounded-lg p-6">
            <h3 class="text-xl font-bold uppercase mb-4">OFFICE LOCATION</h3>
            <p class="mb-2">123 App Street</p>
            <p class="mb-2">Silicon Valley, CA 94000</p>
            <p>United States</p>
          </div>

          <div class="bg-white border border-black rounded-lg p-6">
            <h3 class="text-xl font-bold uppercase mb-4">CONTACT INFO</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@framerapp.com"
                  class="text-blue-600 hover:underline"
                >
                  info@framerapp.com
                </a>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+11234567890"
                  class="text-blue-600 hover:underline"
                >
                  +1 (123) 456-7890
                </a>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <a
                  href="https://github.com/yourusername/framer"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                >
                  github.com/yourusername/framer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div class="grid grid-cols-12 gap-1 mt-1">
        <div class="col-span-12 bg-blue-600 rounded-lg p-6 text-white">
          <h2 class="text-2xl font-bold uppercase mb-6">FOLLOW US</h2>
          <div class="flex space-x-4">
            {/* Social media icons */}
            <a
              href="#"
              class="bg-white/20 hover:bg-white/30 transition p-3 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              class="bg-white/20 hover:bg-white/30 transition p-3 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              class="bg-white/20 hover:bg-white/30 transition p-3 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              class="bg-white/20 hover:bg-white/30 transition p-3 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
