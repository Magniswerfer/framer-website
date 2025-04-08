import { Head } from "$fresh/runtime.ts";

export default function Download() {
  return (
    <div class="bg-white min-h-screen p-1">
      <Head>
        <title>Download Framer App</title>
        <meta
          name="description"
          content="Download the Framer app for Android to perfectly frame your photos for Instagram."
        />
      </Head>

      {/* Header Section with De Stijl Influence */}
      <div className="grid grid-cols-12 gap-1 mb-1">
        <div className="col-span-12 md:col-span-7 bg-black rounded-lg p-6 text-white relative">
          <div className="absolute top-4 right-4 w-16 h-16 circle-red"></div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            DOWNLOAD FRAMER
          </h1>
          <p className="text-xl mb-8 max-w-lg">
            Get the app that helps you create perfectly framed photos for
            Instagram.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#android"
              className="bg-white text-black px-6 py-3 rounded-md font-bold uppercase border border-black"
            >
              ANDROID DOWNLOAD
            </a>
            <div className="w-8 h-8 circle-blue"></div>
            <div className="w-12 h-12 circle-yellow"></div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 bg-red-600 rounded-lg p-6 flex items-center justify-center">
          <div className="bg-white/20 p-4 rounded-lg w-full h-full flex items-center justify-center">
            <div className="w-40 h-40 circle-white flex items-center justify-center">
              <div className="w-24 h-24 circle-black flex items-center justify-center">
                <div className="w-12 h-12 circle-red"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* De Stijl Grid */}
      <div className="grid grid-cols-12 gap-1 mb-1">
        <div className="col-span-3 bg-blue-600 rounded-lg h-8"></div>
        <div className="col-span-2 h-8">
          <div className="w-6 h-6 circle-black m-auto"></div>
        </div>
        <div className="col-span-4 h-8"></div>
        <div className="col-span-3 bg-red-600 rounded-lg h-8"></div>
      </div>

      {/* Download Section */}
      <div
        id="android"
        className="bg-white border border-black rounded-lg p-6 mb-1"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold uppercase mb-4 flex items-center">
              <div className="w-6 h-6 circle-red mr-3"></div>
              ANDROID APP
            </h2>
            <p className="text-lg mb-6">
              Our Android app is available for download directly from the Google
              Play Store.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 circle-blue mt-1 mr-3 flex-shrink-0">
                </div>
                <div>
                  <h3 className="font-bold">Latest Version</h3>
                  <p>v2.5.0 - Updated interface and new frame styles</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 circle-yellow mt-1 mr-3 flex-shrink-0 border border-black">
                </div>
                <div>
                  <h3 className="font-bold">Requirements</h3>
                  <p>Android 6.0 or later</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 circle-black mt-1 mr-3 flex-shrink-0">
                </div>
                <div>
                  <h3 className="font-bold">Size</h3>
                  <p>15MB</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://play.google.com/store"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md font-bold uppercase"
              >
                <span>GET IT ON GOOGLE PLAY</span>
                <div className="w-4 h-4 circle-yellow ml-3"></div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-2 max-w-xs">
              <div className="aspect-[9/16] bg-red-600 rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 circle-white"></div>
              </div>
              <div className="aspect-[9/16] bg-white border-2 border-black rounded-lg">
              </div>
              <div className="aspect-[9/16] bg-yellow-300 rounded-lg"></div>
              <div className="aspect-[9/16] bg-black rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 circle-red"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-black rounded-lg p-6 text-white mb-1">
        <h2 className="text-3xl font-bold uppercase mb-6 flex items-center">
          <div className="w-6 h-6 circle-red mr-3"></div>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "Is the app free to download?",
              answer:
                "Yes, the basic version of Framer is free to download and use. Premium features are available via in-app purchase.",
            },
            {
              question: "Will the app be available for iOS?",
              answer:
                "We're currently working on an iOS version. Join our mailing list to be notified when it launches.",
            },
            {
              question: "How do I share my framed photos to Instagram?",
              answer:
                "After framing your photo, tap the share button and select Instagram from the sharing options.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="p-4 bg-white/10 rounded-lg border border-white/20"
            >
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 circle-${
                    i % 3 === 0 ? "yellow" : i % 3 === 1 ? "blue" : "red"
                  } mr-3`}
                >
                </div>
                <h3 className="font-bold text-lg">{faq.question}</h3>
              </div>
              <p className="mt-2 ml-7 text-white/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-8 bg-red-600 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold uppercase mb-4">
            STAY UPDATED
          </h2>
          <p className="mb-4">
            Subscribe to our newsletter to receive updates on new features and
            releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md flex-grow"
            />
            <button className="bg-white text-black px-6 py-2 rounded-md font-bold uppercase flex items-center">
              <span>SUBSCRIBE</span>
              <div className="w-4 h-4 circle-red ml-2"></div>
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 grid grid-cols-2 grid-rows-2 gap-1">
          <div className="bg-white border border-black rounded-lg"></div>
          <div className="w-16 h-16 circle-yellow m-auto"></div>
          <div className="bg-blue-600 rounded-lg"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
